const exportProblemsButton = document.getElementById('exportProblems');
const exportAnswersButton = document.getElementById('exportAnswers');
exportProblemsButton.addEventListener('click', () => {
    const toConvert = document.getElementById('content').innerHTML;
    const newWindow = window.open('', 'PortionWindow', 'width=1000,height=1000,resizable,scrollbars');
    if (newWindow) {
        // deal with CSS
        Array.from(document.getElementsByTagName('link')).forEach(link => {
            if (link.rel === 'stylesheet') {
                newWindow.document.write(`<link rel="stylesheet" href="${link.href}">`);
            }
        });
        // Copy the content to the new window, including the MathJax script.
        newWindow.document.write('<head><script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"><\/script><title>Problem Set<\/title><\/head>');
        newWindow.document.write(toConvert);
        newWindow.document.close();
        newWindow.focus();
    } else {
        alert("Allow pop-ups on this site to export content.")
    }
});
exportAnswersButton.addEventListener('click', () => {
    const toConvert = document.getElementById('contentAnswers').innerHTML;
    const newWindow = window.open('', 'PortionWindow', 'width=1000,height=1000,resizable,scrollbars');
    if (newWindow) {
        // deal with CSS
        Array.from(document.getElementsByTagName('link')).forEach(link => {
            if (link.rel === 'stylesheet') {
                newWindow.document.write(`<link rel="stylesheet" href="${link.href}">`);
            }
        });
        // Copy the content to the new window, including the MathJax script.
        newWindow.document.write('<head><script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"><\/script><title>Problem Set Answers<\/title><\/head>');
        newWindow.document.write(toConvert);
        newWindow.document.close();
        newWindow.focus();
    } else {
        alert("Allow pop-ups on this site to export content.")
    }
});