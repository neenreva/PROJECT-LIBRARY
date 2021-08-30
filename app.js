const deleteBtn = document.querySelectorAll('#book-list .delete');
    deleteBtn.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        })
});



