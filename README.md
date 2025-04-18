# Pixel Plus Hackathon 2025 - Quizlet Reproduction

## Project Goal

This project is a pixel-perfect reproduction of the Quizlet website ([https://quizlet.com/](https://quizlet.com/)) created as part of the Pixel Plus Hackathon 2025. The goal was to meticulously recreate the visual design and basic interactive elements of a chosen Quizlet page while adhering to the hackathon's guidelines.

## Submission Details

* **Website Replicated:** ([Quizlet](https://quizlet.com/)) - Specifically, the Homepage.
* **Live Demo:** [** https://quizlet-clone-self.vercel.app/ **]
* **GitHub Repository:** [**https://github.com/lhcee3/quizlet-clone-**]

## Pixel-Perfect Reproduction

This reproduction focuses on achieving a high degree of visual fidelity to the original Quizlet website. This includes:

* **Layout:** Accurate recreation of the page structure and element positioning.
* **Typography:** Matching fonts, font sizes, line heights, and letter spacing.
* **Color Palette:** Exact use of Quizlet's color scheme.
* **Spacing and Padding:** Precise adherence to the original website's spacing and padding.
* **Interactive Elements:** Replicating the basic interactive behaviors (e.g., hover effects, button clicks - where applicable within the single-page constraint).
* **Iconography:** Inclusion of relevant icons and visual assets.

## New Enhancement

To go beyond a simple reproduction, I've added a user-customizable theme option allowing users to select different color palettes for the Quizlet interface


## Tech Stack

* **Frontend Framework:** Next.js
* **Styling:** Tailwind CSS
* **Deployment:** Vercel

## Addressing the "Single HTML File" Constraint

All the code is present in `page.tsx`.

While this project was built using Next.js, a framework that inherently involves multiple JavaScript modules and components, the final deployed output on Vercel serves as a functional web application accessible through a single URL. The visual accuracy and added functionality are demonstrable through this deployed link. The provided GitHub repository showcases the code used to generate this output.

## Installation (for local development - optional but good practice)

1.  Clone the repository: `git clone [https://github.com/lhcee3/quizlet-clone-]`
2.  Navigate to the project directory: `cd [quizlet-clone-]`
3.  Install dependencies: `npm install` or `yarn install`
4.  Run the development server: `npm run dev` or `yarn dev`
5.  Open your browser and navigate to `http://localhost:3000` (or the port specified in your terminal).

## Notes and Considerations

* Due to the "single HTML file" constraint of the hackathon, the interactive elements might be simplified compared to the original Quizlet website and all the code is present in ``` page.tsx```.
* Mock data has been used where necessary to simulate dynamic content.
