document.addEventListener('DOMContentLoaded', function() {
    const animationButtons = document.querySelectorAll('#buttons button');
    const backgroundButtons = document.querySelectorAll('#background-buttons button');
    const unicorn = document.querySelector('#unicorn');
    const submitButton = document.getElementById('submit-button');
    const removeButton = document.getElementById('remove-button');
    const unicornContainer = document.getElementById('unicorn-container');
    const body = document.body;

    let speechBubble = null;

    // Start the bounce animation
    unicorn.classList.add('bounce-animation');

    // Event listeners for animation buttons
    animationButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const animation = button.getAttribute('data-animation');

            // Remove bounce animation
            unicorn.classList.remove('bounce-animation');

            // Call the selected animation function
            animations[animation]().then(function() {
                // After the animation ends, add bounce animation back
                unicorn.classList.add('bounce-animation');
            });
        });
    });

    // Event listeners for background buttons
    backgroundButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const bg = button.getAttribute('data-bg');

            // Remove any existing background classes
            body.classList.remove('bg-moving-stripes', 'bg-flashy', 'bg-waves', 'bg-sparkles', 'bg-grass');

            // Add the selected background class
            switch(bg) {
                case 'moving-stripes':
                    body.classList.add('bg-moving-stripes');
                    break;
                case 'flashy':
                    body.classList.add('bg-flashy');
                    break;
                case 'waves':
                    body.classList.add('bg-waves');
                    break;
                case 'sparkles':
                    body.classList.add('bg-sparkles');
                    break;
                case 'grass':
                    body.classList.add('bg-grass');
                    break;
                default:
                    // Default background
                    body.style.background = '#f0f8ff';
            }
        });
    });

    // Submit Speech Button
    submitButton.addEventListener('click', function() {
        submitSpeech();
    });

    // Remove Speech Button
    removeButton.addEventListener('click', function() {
        deleteSpeech();
    });

    // Function to submit or update speech bubble
    function submitSpeech() {
        const inputText = document.getElementById('speech-input').value;
        if (!inputText.trim()) return;

        // Check for the special phrase
        if (inputText.toLowerCase().trim() === "you are cute") {
            // Trigger rainbow animation
            animations.rainbowBody().then(function() {
                // After rainbow animation completes, continue with normal bounce
                unicorn.classList.add('bounce-animation');
            });
        }

        if (speechBubble) {
            // Update existing speech bubble
            const bubbleText = speechBubble.querySelector('.bubble-text');
            bubbleText.textContent = inputText;
        } else {
            // Create new speech bubble
            speechBubble = document.createElement('div');
            speechBubble.classList.add('speech-bubble');
            speechBubble.innerHTML = `<span class="bubble-text">${inputText}</span>`;
            unicornContainer.appendChild(speechBubble);

            // Show the Remove button
            removeButton.classList.remove('hidden');
        }

        // Clear input field after submission
        document.getElementById('speech-input').value = '';
    }

    // Function to remove speech bubble
    function deleteSpeech() {
        if (speechBubble) {
            speechBubble.remove();
            speechBubble = null;

            // Hide the Remove button
            removeButton.classList.add('hidden');

            // Clear input field
            document.getElementById('speech-input').value = '';
        }
    }

    const animations = {
        wave: function() {
            return new Promise(function(resolve) {
                const frontLegHoof = document.querySelector('#front-leg-hoof');

                frontLegHoof.classList.add('wave-animation');

                frontLegHoof.addEventListener('animationend', function handler() {
                    frontLegHoof.classList.remove('wave-animation');
                    frontLegHoof.style.transform = 'none';
                    frontLegHoof.removeEventListener('animationend', handler);
                    resolve();
                });
            });
        },
        jump: function() {
            return new Promise(function(resolve) {
                unicorn.classList.add('jump-animation');

                unicorn.addEventListener('animationend', function handler() {
                    unicorn.classList.remove('jump-animation');
                    unicorn.style.transform = 'none';
                    unicorn.removeEventListener('animationend', handler);
                    resolve();
                });
            });
        },
        wagTail: function() {
            return new Promise(function(resolve) {
                const tail = document.querySelector('#tail');

                tail.classList.add('wag-tail-animation');

                tail.addEventListener('animationend', function handler() {
                    tail.classList.remove('wag-tail-animation');
                    tail.style.transform = 'none';
                    tail.removeEventListener('animationend', handler);
                    resolve();
                });
            });
        },
        blink: function() {
            return new Promise(function(resolve) {
                const eyes = document.querySelector('#eyes');

                eyes.classList.add('blink-animation');

                eyes.addEventListener('animationend', function handler() {
                    eyes.classList.remove('blink-animation');
                    eyes.style.opacity = '1';
                    eyes.removeEventListener('animationend', handler);
                    resolve();
                });
            });
        },
        nodHead: function() {
            return new Promise(function(resolve) {
                const headNeckGroup = document.querySelector('#head-neck-group');

                headNeckGroup.classList.add('nod-head-animation');

                headNeckGroup.addEventListener('animationend', function handler() {
                    headNeckGroup.classList.remove('nod-head-animation');
                    headNeckGroup.style.transform = 'none';
                    headNeckGroup.removeEventListener('animationend', handler);
                    resolve();
                });
            });
        },
        wiggleEars: function() {
            return new Promise(function(resolve) {
                const ears = document.querySelector('#ears');

                ears.classList.add('wiggle-ears-animation');

                ears.addEventListener('animationend', function handler() {
                    ears.classList.remove('wiggle-ears-animation');
                    ears.style.transform = 'none';
                    ears.removeEventListener('animationend', handler);
                    resolve();
                });
            });
        },
        shakeMane: function() {
            return new Promise(function(resolve) {
                const mane = document.querySelector('#mane');

                mane.classList.add('shake-mane-animation');

                mane.addEventListener('animationend', function handler() {
                    mane.classList.remove('shake-mane-animation');
                    mane.style.transform = 'none';
                    mane.removeEventListener('animationend', handler);
                    resolve();
                });
            });
        },
        shootHorn: function() {
            return new Promise(function(resolve) {
                const horn = document.querySelector('#horn');

                horn.classList.add('shoot-horn-animation');

                horn.addEventListener('animationend', function handler() {
                    horn.classList.remove('shoot-horn-animation');
                    horn.style.transform = 'none';
                    horn.removeEventListener('animationend', handler);
                    resolve();
                });
            });
        },
        rainbowBody: function() {
            return new Promise(function(resolve) {
                const bodyShape = document.querySelector('#body-shape');

                bodyShape.classList.add('rainbow-body-animation');

                bodyShape.addEventListener('animationend', function handler() {
                    bodyShape.classList.remove('rainbow-body-animation');
                    bodyShape.style.fill = '#fff';
                    bodyShape.removeEventListener('animationend', handler);
                    resolve();
                });
            });
        },
        spin: function() {
            return new Promise(function(resolve) {
                unicorn.classList.add('spin-animation');

                unicorn.addEventListener('animationend', function handler() {
                    unicorn.classList.remove('spin-animation');
                    unicorn.style.transform = 'none';
                    unicorn.removeEventListener('animationend', handler);
                    resolve();
                });
            });
        },
        twirl: function() {
            return new Promise(function(resolve) {
                unicorn.classList.add('twirl-animation');

                unicorn.addEventListener('animationend', function handler() {
                    unicorn.classList.remove('twirl-animation');
                    unicorn.style.transform = 'none';
                    unicorn.removeEventListener('animationend', handler);
                    resolve();
                });
            });
        }
    };
});
