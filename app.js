const sumItems = document.querySelectorAll('.sum a[href^="#"]');

sumItems.forEach(item =>{
    item.addEventListener('click', scrollToId);
})

function getScrollTopByHref(element)
{
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToId(event)
{
    event.preventDefault();
    const to = getScrollTopByHref(event.target)-30;

    scrollToPosition(to);
}

function scrollToPosition(to)
{
    window.scroll({
    top:to,
    behavior:"smooth"
    });
    
}
