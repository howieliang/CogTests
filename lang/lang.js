// Reads the stored language preference and synchronously loads the correct language file.
(function () {
    const lang = localStorage.getItem('lang') || 'en_us';
    document.write('<script src="lang/' + lang + '.js"><\/script>');
})();
