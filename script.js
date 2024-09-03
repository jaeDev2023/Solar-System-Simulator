document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('button');
    const contentContainer = document.getElementById('contentContainer');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const isActive = button.classList.contains('active');

            // Clear active class from all buttons and content
            buttons.forEach(btn => btn.classList.remove('active'));
            contentContainer.innerHTML = '';

            // activate button if it wasn't active
            if (!isActive) {
                button.classList.add('active');

                let contentFragment = document.createDocumentFragment();
                let content;
                switch(button.id) {
                    case 'physics-button':
                        content = document.createElement('div');
                        content.innerHTML = `
                            <h2>The Physics of The Situation: </h2>
                            <p>Objects of mass affect each other. You can determine the "force" that objects pull each other with the equation below:</p>
                            <p>F = (G * m<sub>1</sub> * m<sub>2) / r<sup>2</sup></sub></p>
                            <p>What do these variables mean?</p>
                            <ul>
                                <li>F: this is the force that is being calculated.</li>
                                <li>G: The gravitational constant. A very small value. This is always the same value when using this equation.</li>
                                <li>m1: the mass of the first object. Increasing this increases the force. Decreasing this value decreases the force.</li>
                                <li>m2: the mass of the second object. Increase this also increases the force, and decreasing also decreases the resulting force felt between the two objects.</li>
                                <li>r<sup>2</sup>: the distance between to two objects. Increasing the distance decreases the force between the two objects.</li>
                            </ul>
                            <h2>Using Force in the simulation</h2>
                            <p>The simulation runs in a 3D environment. While the sim runs, we go through every object in the game and use the force equation to calculate the force an individual objects "feels" betweeen all other objects. This will change its velocity and acceleration, which allows the game to update the positions of objects over time.</p>
                        `;
                        contentFragment.appendChild(content);
                        break;
                    case 'babylon-button':
                        content = document.createElement('div');
                        content.innerHTML = `
                            <p>Test</p>
                        `
                        contentFragment.appendChild(content);
                        break;
                    case 'html-button':
                        content = '<p>Content for the html button</p><hr>';
                        break;
                    case 'css-button':
                        content = '<p>Content for the css button</p><hr>';
                        break
                }

                contentContainer.appendChild(contentFragment);
            }
        });
    });
});
