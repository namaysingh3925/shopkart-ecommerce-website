// Provide your Script here
/* ============================================================
   User Profile - JavaScript
   ShopEase E-Commerce Platform

   Rules followed for this project:
   - No backend, no database, no API
   - No localStorage (data resets when the page reloads)
   - All data is mock data defined below
   ============================================================ */


/* ------------------------------------------------------------
   1. MOCK DATA
   ------------------------------------------------------------ */

// Logged-in user (pretend this came from a login page)
let user = {
    name: "Nakul Sharma",
    email: "nakul.sharma@example.com",
    phone: "9876543210",
    gender: "Male",
    address: "No. 42, 3rd Cross, HSR Layout, Bengaluru, Karnataka - 560102",
    joined: "March 2024"
};

// Past orders
const orders = [
    {
        id: "ORD-1042",
        date: "12 Aug 2026",
        items: ["Wireless Headphones", "Phone Stand"],
        total: 1798,
        status: "Delivered"
    },
    {
        id: "ORD-1038",
        date: "29 Jul 2026",
        items: ["Smart Watch"],
        total: 2499,
        status: "Shipped"
    },
    {
        id: "ORD-1025",
        date: "10 Jul 2026",
        items: ["Running Shoes", "Cotton T-Shirt", "Sports Socks"],
        total: 3247,
        status: "Delivered"
    },
    {
        id: "ORD-1011",
        date: "22 Jun 2026",
        items: ["Bluetooth Speaker"],
        total: 1999,
        status: "Cancelled"
    },
    {
        id: "ORD-1007",
        date: "05 Jun 2026",
        items: ["Laptop Sleeve"],
        total: 899,
        status: "Processing"
    }
];

// Saved delivery addresses
const addresses = [
    {
        label: "Home",
        text: "No. 42, 3rd Cross, HSR Layout, Bengaluru, Karnataka - 560102",
        isDefault: true
    },
    {
        label: "Office",
        text: "Intellipaat School of Technology, Electronic City Phase 1, Bengaluru - 560100",
        isDefault: false
    }
];

// Wishlist (only the count is shown on this page)
const wishlist = ["Gaming Mouse", "Mechanical Keyboard", "Fitness Band"];


/* ------------------------------------------------------------
   2. ELEMENT REFERENCES
   ------------------------------------------------------------ */

const avatar = document.getElementById("avatar");
const bannerName = document.getElementById("bannerName");
const bannerEmail = document.getElementById("bannerEmail");
const bannerJoined = document.getElementById("bannerJoined");

const statOrders = document.getElementById("statOrders");
const statWishlist = document.getElementById("statWishlist");
const statAddresses = document.getElementById("statAddresses");

const viewName = document.getElementById("viewName");
const viewEmail = document.getElementById("viewEmail");
const viewPhone = document.getElementById("viewPhone");
const viewGender = document.getElementById("viewGender");
const viewAddress = document.getElementById("viewAddress");

const viewMode = document.getElementById("viewMode");
const editMode = document.getElementById("editMode");
const editBtn = document.getElementById("editBtn");
const cancelBtn = document.getElementById("cancelBtn");
const profileForm = document.getElementById("profileForm");

const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");
const inputPhone = document.getElementById("inputPhone");
const inputGender = document.getElementById("inputGender");
const inputAddress = document.getElementById("inputAddress");

const errName = document.getElementById("errName");
const errEmail = document.getElementById("errEmail");
const errPhone = document.getElementById("errPhone");
const errAddress = document.getElementById("errAddress");

const orderList = document.getElementById("orderList");
const addressList = document.getElementById("addressList");
const toast = document.getElementById("toast");


/* ------------------------------------------------------------
   3. HELPER FUNCTIONS
   ------------------------------------------------------------ */

// "Nakul Sharma" -> "NS"
function getInitials(fullName) {
    const parts = fullName.trim().split(" ");
    let initials = parts[0].charAt(0);

    if (parts.length > 1) {
        initials += parts[parts.length - 1].charAt(0);
    }
    return initials.toUpperCase();
}

// 1798 -> "₹1,798"
function formatPrice(amount) {
    return "₹" + amount.toLocaleString("en-IN");
}

// "Delivered" -> "badge badge-delivered"
function getBadgeClass(status) {
    return "badge badge-" + status.toLowerCase();
}

// Small message at the bottom of the screen
function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 2500);
}


/* ------------------------------------------------------------
   4. RENDER FUNCTIONS
   ------------------------------------------------------------ */

// Banner + read-only details
function renderProfile() {
    avatar.textContent = getInitials(user.name);
    bannerName.textContent = user.name;
    bannerEmail.textContent = user.email;
    bannerJoined.textContent = user.joined;

    viewName.textContent = user.name;
    viewEmail.textContent = user.email;
    viewPhone.textContent = user.phone;
    viewGender.textContent = user.gender;
    viewAddress.textContent = user.address;

    statOrders.textContent = orders.length;
    statWishlist.textContent = wishlist.length;
    statAddresses.textContent = addresses.length;
}

// Order history list
function renderOrders() {
    orderList.innerHTML = "";

    if (orders.length === 0) {
        orderList.innerHTML = "<p>No orders yet. Start shopping to see them here.</p>";
        return;
    }

    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];

        const box = document.createElement("div");
        box.className = "order-item";

        box.innerHTML =
            '<div class="order-top">' +
            '<span class="order-id">' + order.id + '</span>' +
            '<span class="order-date">' + order.date + '</span>' +
            '</div>' +
            '<p class="order-products">' + order.items.join(", ") + '</p>' +
            '<div class="order-bottom">' +
            '<span class="order-total">' + formatPrice(order.total) + '</span>' +
            '<span class="' + getBadgeClass(order.status) + '">' + order.status + '</span>' +
            '</div>';

        orderList.appendChild(box);
    }
}

// Saved addresses list
function renderAddresses() {
    addressList.innerHTML = "";

    for (let i = 0; i < addresses.length; i++) {
        const item = addresses[i];

        const box = document.createElement("div");
        box.className = item.isDefault ? "address-item default" : "address-item";

        const tag = item.isDefault ? '<span class="tag">Default</span>' : "";

        box.innerHTML =
            '<p class="address-label">' + item.label + tag + '</p>' +
            '<p class="address-text">' + item.text + '</p>';

        addressList.appendChild(box);
    }
}


/* ------------------------------------------------------------
   5. TABS
   ------------------------------------------------------------ */

const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        // Remove "active" from every button and panel
        tabButtons.forEach(function (b) { b.classList.remove("active"); });
        tabPanels.forEach(function (p) { p.classList.remove("active"); });

        // Activate the clicked one
        button.classList.add("active");
        document.getElementById(button.dataset.tab).classList.add("active");
    });
});


/* ------------------------------------------------------------
   6. EDIT / SAVE PROFILE
   ------------------------------------------------------------ */

// Fill the form with current values, then show it
editBtn.addEventListener("click", function () {
    inputName.value = user.name;
    inputEmail.value = user.email;
    inputPhone.value = user.phone;
    inputGender.value = user.gender;
    inputAddress.value = user.address;

    clearErrors();
    viewMode.classList.add("hidden");
    editMode.classList.remove("hidden");
});

// Discard changes
cancelBtn.addEventListener("click", function () {
    editMode.classList.add("hidden");
    viewMode.classList.remove("hidden");
});

// Remove all error messages and red borders
function clearErrors() {
    errName.textContent = "";
    errEmail.textContent = "";
    errPhone.textContent = "";
    errAddress.textContent = "";

    inputName.classList.remove("invalid");
    inputEmail.classList.remove("invalid");
    inputPhone.classList.remove("invalid");
    inputAddress.classList.remove("invalid");
}

// Check every field, return true only if all of them are valid
function validateForm() {
    clearErrors();
    let isValid = true;

    const nameValue = inputName.value.trim();
    const emailValue = inputEmail.value.trim();
    const phoneValue = inputPhone.value.trim();
    const addressValue = inputAddress.value.trim();

    // Name: at least 3 characters
    if (nameValue.length < 3) {
        errName.textContent = "Enter your full name (minimum 3 characters).";
        inputName.classList.add("invalid");
        isValid = false;
    }

    // Email: must look like name@domain.com
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        errEmail.textContent = "Enter a valid email address, like nakul@example.com.";
        inputEmail.classList.add("invalid");
        isValid = false;
    }

    // Phone: exactly 10 digits
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneValue)) {
        errPhone.textContent = "Enter a 10-digit phone number.";
        inputPhone.classList.add("invalid");
        isValid = false;
    }

    // Address: at least 10 characters
    if (addressValue.length < 10) {
        errAddress.textContent = "Enter a complete address with city and PIN code.";
        inputAddress.classList.add("invalid");
        isValid = false;
    }

    return isValid;
}

// Save the form
profileForm.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading

    if (!validateForm()) {
        return;
    }

    // Update the user object held in memory
    user.name = inputName.value.trim();
    user.email = inputEmail.value.trim();
    user.phone = inputPhone.value.trim();
    user.gender = inputGender.value;
    user.address = inputAddress.value.trim();

    renderProfile();

    editMode.classList.add("hidden");
    viewMode.classList.remove("hidden");

    showToast("Profile updated");
});


/* ------------------------------------------------------------
   7. START THE PAGE
   ------------------------------------------------------------ */

renderProfile();
renderOrders();
renderAddresses();