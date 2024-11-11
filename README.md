# Pippin Moves

![Pippin the Unicorn](https://x.com/pippinlovesyou)

Welcome to **Pippin Moves**, a playful tool designed to experiment with animating Pippin the Unicorn's SVG. This project serves as a template/inspiration for developers who want to create new animations or tools for Pippin, fostering creativity within the $pippin community.

## Live Demo

Experience Pippin in action: [https://pippinmoves.replit.app/](https://pippinmoves.replit.app/)

## Features

- **Interactive Animations:** Trigger various animations on Pippin the Unicorn with just a click.
- **Expandable Template:** Easily add new animations or tools to enhance Pippin's interactions.
- **Community Driven:** Join the vibrant $pippin community to share ideas and collaborate.

## Getting Started

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Edge)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yoheinakajima/pippin-moves.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd pippin-moves
   ```

3. **Open the Project:**

   Open `index.html` in your preferred web browser to start interacting with Pippin.

## Usage

Interact with Pippin by clicking on the various emoji buttons to trigger different animations. Each button corresponds to a unique animation that brings Pippin to life.

### Example Animation: Wave

Clicking the 👋 (Wave) button triggers Pippin to perform a waving animation. Here's how it works under the hood:

1. **Button Interaction:**
   - When the 👋 button is clicked, a JavaScript event listener captures the action.

2. **Animation Trigger:**
   - The corresponding animation class (`wave-animation`) is added to Pippin's SVG element.

3. **CSS Animation:**
   - The `.wave-animation` class defines keyframes that rotate Pippin's front leg, creating a waving motion.

4. **Reset Animation:**
   - Once the animation completes, the class is removed to allow for future interactions.

This modular approach allows developers to add new animations by defining additional classes and linking them to new buttons.

## Join the Community

Connect with other enthusiasts and developers in the $pippin community:

- **Telegram:** [Join Here](https://t.me/+7cN7QepgemMxOTgx)
- **Twitter:** [@pippinlovesyou](https://x.com/pippinlovesyou)

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Thank you for contributing to Pippin! Let's create magical animations together. 🦄✨
