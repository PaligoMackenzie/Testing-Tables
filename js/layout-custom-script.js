$(document).ready(function() {
    $('button.navbar-toggle').on('click', function() {
    // Save state in local storage
    const isSidebarCollapsed = $('.site-body-row').hasClass('collapse-sidebar-nav');
    localStorage.setItem('sidebarCollapsed', isSidebarCollapsed.toString());
    });
    
    
    // Check local storage for state and apply it on page load
    const isSidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    if (isSidebarCollapsed) {
    $('.site-body-row').addClass('collapse-sidebar-nav');
    }
});