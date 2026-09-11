
# E-Commerce Platform

A beginner-friendly frontend e-commerce website developed to simulate a collaborative software development environment. Requirements are managed via **Jira**, source code via **Git/GitHub**, and automated testing/deployment via **CI/CD**.

---

## Project Overview

This is a modern, responsive online shopping website focusing on frontend development and team workflows. It is a **frontend-only project**; there is no backend, database, or real payment gateway. All data should be simulated using predefined JavaScript mocks.

**Technologies Used:**
* HTML5, CSS3, JavaScript
* Git & GitHub
* Jira
* GitHub Actions (CI/CD)
* GitHub Pages (Deployment)

---

## Core Features

Implement the following features using mock data, with each feature tracked via its own Jira ticket:

* **Authentication UI:** Simple login, registration, and forgot password forms.
* **Home Page:** Hero section, promotional banners, and popular categories.
* **Shopping Cart:** View items, adjust quantities, calculate totals, and remove products.
* **Wishlist:** Save and remove favorite products during the session.
* **User Profile:** Manage mock account details, addresses, and view options.
* **Checkout & Payments:** Form for delivery info and mock payment method selection.
* **Order History & Tracking:** Timeline view of past orders and mock delivery statuses.
* **Offers & Coupons:** Promotional banners and functional coupon code application.
* **Reviews & Ratings:** Star rating display and mock customer feedback submission.
* **Support:** Contact form and an accordion-style FAQ/Help center.
* **Notifications & Settings:** Mock notification center and basic app preferences (e.g., dark mode toggle).

---

## Development Workflow

This project strictly follows a professional Git workflow. **Do not push directly to the `main` branch.**

1. **Jira Task:** Pick up your assigned task and review the acceptance criteria.
2. **Branching:** Create a feature branch from `main` (e.g., `git checkout -b feature/shopping-cart`).
3. **Development:** Write clean, responsive code (Desktop, Tablet, Mobile).
4. **Commit:** Use clear, meaningful commit messages.
5. **Pull Request (PR):** Push your branch and open a PR targeting `main`.
6. **Continuous Integration (CI):** Wait for GitHub Actions checks to pass.
7. **Code Review:** Obtain approval from peers.
8. **Merge & Deploy (CD):** Once merged, GitHub Actions will automatically deploy the live site to GitHub Pages.

---

## Project Rules

* Always use feature branches and Pull Requests.
* Ensure code passes all CI validations before requesting a review.
* Ensure UI is fully responsive using Flexbox, Grid, and Media Queries.
* Do not integrate real payment gateways, databases, or external APIs. 
* Use mock data within JavaScript arrays/objects for all dynamic content.
