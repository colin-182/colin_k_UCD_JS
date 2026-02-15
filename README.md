My Fitness Tracker
Project Description
My Fitness Tracker is a single-page web application that allows users to log their workouts, view a history of previous sessions, and track progress toward a weekly workout goal. It focuses on a simple, clean interface and clear feedback so users can quickly record their activity and see their progress at a glance.

Features
Feature 1 – Workout Logging Form
A structured form lets users enter key workout details, including date, workout type (cardio, strength, flexibility, other), duration in minutes, intensity, and optional notes. All required inputs are validated; if the user submits an incomplete or invalid form, error messages appear next to the relevant fields and a general error message is shown above the form.

Feature 2 – Workout History Table with Filters
Each valid workout is added to a dynamic table in the “Previous Workouts” section. The table shows the logged date, type, duration, intensity, and notes, and includes a delete button for removing entries. Filter buttons above the table allow users to show all workouts or only specific types (e.g. Cardio, Strength), updating the visible rows without reloading the page.

Feature 3 – Stats & Weekly Goal Progress Bar
A stats panel summarises the total number of workouts, total minutes logged, and the number of workouts completed in the current week. Users can set a weekly workout goal, and a graphical progress bar displays how close they are to that goal (as a percentage). Whenever a new workout is added or the goal value is updated, the statistics and progress bar update automatically.

Feature 4 – Smooth Navigation and Theme Toggle
Navigation links in the header smoothly scroll to each section of the page, improving the single-page app experience. A theme toggle button switches between a dark and light theme by changing CSS variables, clearly altering background and text colours to suit user preference and accessibility needs.

Design Choices
Colors
The dark theme uses deep blue and slate tones for the background, with light text to create strong contrast and reduce eye strain during extended use. The light theme uses a white background with dark text for readability and familiarity. A green accent color is used for buttons and the progress bar to convey positivity and progress, and to draw attention to primary actions such as “Save Workout” and the goal indicator.

Fonts/Typography
A system sans-serif font stack (e.g. Arial, Segoe UI, system UI) was chosen to keep the interface clean, modern, and consistent with users’ operating systems. This helps performance (no external font loading) and maintains readability at various sizes. Headings are slightly larger and bolder to establish a clear visual hierarchy, while body text remains compact and easy to scan.

Images/Graphics
The main visual emphasis is on interface elements—such as cards, the progress bar, and buttons—instead of decorative images. This keeps the layout focused on data and usability. The progress bar serves as the primary graphic element, providing an immediate visual representation of weekly goal completion without distracting from the core logging and history features.

Development Process
Project Planning
The initial scope included three core features: a workout logging form, a history section to display logged workouts, and a simple statistics area. From there, the feature list expanded to include data validation, per-row delete actions, basic filtering by workout type, and a weekly goal with a progress bar. A theme toggle and smooth scrolling were added as enhancements to improve user experience and satisfy interactivity requirements.

Wireframes
Simple wireframes were sketched to define the layout:

A sticky header with navigation links

A “Welcome” section with a call-to-action button

A main “Log Workout” section with vertically stacked form fields

A “Previous Workouts” section containing a table and filter buttons

A “Stats & Weekly Goals” section with three stat cards and a progress bar


Challenges Faced
One challenge was ensuring that form validation and DOM updates worked correctly together, especially handling empty fields and invalid numbers without breaking the form. Another challenge was keeping the stats and progress bar in sync when workouts were added or deleted, which required carefully updating both the array of workouts and the rendered table. Implementing the theme toggle also required refactoring colours into CSS variables so that toggling a single class on the <body> would update the look consistently.

Interactivity
JavaScript is used to make the project interactive in several ways:

Form Handling and Validation:
Event listeners detect form submissions, prevent the default behaviour, validate each field, and display error or success messages.

Dynamic DOM Manipulation:
When a workout is saved, a new table row is created and appended to the history table. When the delete button is clicked, the corresponding workout is removed from both the DOM and the internal data array.

Statistics and Progress Bar:
Each time the workout list changes, JavaScript recalculates total workouts, total minutes, and current-week workouts. It then updates the text values and adjusts the width and label of the progress bar.

Filtering:
Filter buttons use data attributes to show or hide table rows based on workout type, providing an immediate way to focus on specific kinds of workouts.

Theme Toggle and Smooth Scroll:
The theme toggle button adds or removes a class on the <body>, switching between light and dark themes via CSS variables. Header navigation links and the “Start Logging Workouts” button use smooth scrolling to transition between sections on the page.

Deployed Site
This site has been deployed to GitHub Pages at the URL below: