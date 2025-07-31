// Get the modal
var modal = document.getElementById("popupModal");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close-btn")[0];

// Get all the buttons
var buttons = document.querySelectorAll('.more-info');

// When a button is clicked, show the modal with details
buttons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        var modelName = document.querySelectorAll('.grid-item h3')[index].textContent;
        var modelArea = document.querySelectorAll('.grid-item p')[index].textContent;
        var modelPrice = document.querySelectorAll('.grid-item .price')[index].textContent;

        // Cập nhật nội dung modal với thông tin sản phẩm
        document.getElementById('modalText').innerText = `Name: ${modelName}
Area: ${modelArea}
Price: ${modelPrice}`;

        // Hiển thị modal
        modal.style.display = "block";
    });
});

// Khi nhấn vào nút "Contact Now", chuyển hướng tới liên hệ
document.querySelector('.contact-btn').addEventListener('click', function() {
    window.location.href = 'tel:+1234567890'; // Hoặc tới email: 'mailto:example@email.com'
});

// Đóng modal khi nhấn vào nút "x"
closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
});

// Đóng modal khi nhấn ra ngoài
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Smooth scroll when clicking navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
