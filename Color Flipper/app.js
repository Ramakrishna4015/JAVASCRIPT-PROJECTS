const colorBtn = document.getElementById('colorBtn');
        const colors = ['#FF5733', '#3498DB', '#27AE60', '#F39C12', '#9B59B6', '#E74C3C'];

        colorBtn.addEventListener('click', changeBackgroundColor);

        function changeBackgroundColor() {
            const randomIndex = Math.floor(Math.random() * colors.length);
            document.body.style.backgroundColor = colors[randomIndex];
        }