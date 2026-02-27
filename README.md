# KCET - Seminar Mark Management System

A premium, secure, and role-based web portal developed for managing
**Seminar Day evaluations** at KCET.

This system provides structured access for Admin, Faculty, and Venue
Incharge roles with real-time validation, animated UI, and secure login
workflow.

------------------------------------------------------------------------

## 🚀 Project Overview

The **Seminar Mark Management System** is a modern academic evaluation
platform designed to:

-   Manage venue-wise seminar marks
-   Provide secure faculty login
-   Generate real-time evaluation records
-   Support PDF report workflows
-   Enable role-based dashboard redirection

Built with: - HTML5 - CSS3 (Advanced UI & Animations) - Vanilla
JavaScript - Google Fonts (Cormorant Garamond + Plus Jakarta Sans)

------------------------------------------------------------------------

## 🎨 UI Features

-   Ultra-premium split-screen layout
-   Animated loader screen
-   Particle background animation
-   Smooth login transitions
-   Password visibility toggle
-   Real-time form validation
-   Success overlay animation
-   Shake animation on invalid login
-   Fully responsive design

------------------------------------------------------------------------

## 🔐 Authentication Flow

1.  Faculty enters ID and Password

2.  Real-time validation checks input

3.  Login button shows spinner during verification

4.  API request sent via `postData('login', {...})`

5.  Based on role, redirect to:

    -   `admin.html`
    -   `venue_incharge.html`
    -   `faculty.html`

6.  User session stored in localStorage:

    -   faculty_id
    -   venue
    -   role
    -   faculty_name
    -   batch

------------------------------------------------------------------------

## 🏛 Role-Based Access

  Role             Redirect Page
  ---------------- ---------------------
  Admin            admin.html
  Venue Incharge   venue_incharge.html
  Faculty          faculty.html

------------------------------------------------------------------------

## 📂 Project Structure

    /kcet-seminar-portal
    │
    ├── index.html
    ├── admin.html
    ├── faculty.html
    ├── venue_incharge.html
    ├── common.js
    ├── assets/
    └── README.md

------------------------------------------------------------------------

## ✨ Design Highlights

-   Gradient-based academic theme
-   Frosted right panel aesthetic
-   Animated particle network canvas
-   Accessible input fields
-   Smooth fade-out page transition
-   Responsive (Mobile + Desktop)

------------------------------------------------------------------------

## 🛠 Future Enhancements

-   JWT-based authentication
-   Session timeout handling
-   Audit logging
-   Advanced dashboard analytics
-   Dark mode toggle
-   Two-factor authentication

------------------------------------------------------------------------

## 📜 License

Institutional Use -- KCET Seminar Portal\
© 2025 KCET

------------------------------------------------------------------------

## 👨‍💻 Developed By

Mr. S. Alwyn Rajiv
Assistant Professor
KCET
