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

                let content = '';
                switch(button.id) {
                    case 'physics-button':
                        content = '<p>Content for Physics Button</p>';
                        break;
                    case 'babylon-button':
                        content = '<p>Content for Babylon.js button</p>';
                        break;
                    case 'html-button':
                        content = '<p>Content for the html button';
                        break;
                    case 'css-button':
                        content = '<p>Content for the css button</p>';
                        break

                }

                contentContainer.innerHTML = content;
            }
        });
    });
});
