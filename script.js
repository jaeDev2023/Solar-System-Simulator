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
                            <h2>Babylon.js</h2>
                            <p><a href="https://www.babylonjs.com/">Babylon.js</a> is a powerful 3D engine used to display graphics in browsers!</p>
                            <p>With it, you can create games, simulations, models, and anything that your heart desires!</p>
                            <p>S<sup>3</sup> uses the babylon.js API to generate objects within 3D space and uses the power of physics to fling those objects through space!</p>
                        `
                        contentFragment.appendChild(content);
                        break;
                    case 'html-button':
                        content = document.createElement('div');
                        content.innerHTML = `
                            <h2>HTML</h2>
                            <p>HTML is a powerful markup language used to build the framework of a webpage. Place headings, paragraphs, links, images, and establish the basic structure with HyperText Markup Language.</p>
                        `;
                        contentFragment.appendChild(content);
                        break;
                    case 'css-button':
                        content = document.createElement('div');
                        content.innerHTML = `
                            <h2>CSS</h2>
                            <p>CSS is the language used to style and set up the presentation of a webpage!</p>
                            <p>Change color, spacing, font, size, and almost every other visual aspect of a webpage and the elements that make up the webpage. It is an extremely powerful tool for creating the website of your dreams!</p>
                        `;
                        contentFragment.appendChild(content);
                        break
                }

                contentContainer.appendChild(contentFragment);
            }
        });
    });
});
