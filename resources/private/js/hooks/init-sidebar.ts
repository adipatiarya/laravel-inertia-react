function slideUp(elm: HTMLElement, duration: number = 300): void {
    if (elm.classList.contains('transitioning')) return;

    elm.classList.add('transitioning');
    elm.style.transitionProperty = 'height, margin, padding';
    elm.style.transitionDuration = `${duration}ms`;
    elm.style.boxSizing = 'border-box';

    // Set current height to trigger transition
    elm.style.height = `${elm.offsetHeight}px`;
    // Force reflow
    void elm.offsetHeight;

    elm.style.overflow = 'hidden';
    elm.style.height = '0';
    elm.style.paddingTop = '0';
    elm.style.paddingBottom = '0';
    elm.style.marginTop = '0';
    elm.style.marginBottom = '0';

    window.setTimeout(() => {
        elm.style.display = 'none';

        // Clean up inline styles
        elm.style.removeProperty('height');
        elm.style.removeProperty('padding-top');
        elm.style.removeProperty('padding-bottom');
        elm.style.removeProperty('margin-top');
        elm.style.removeProperty('margin-bottom');
        elm.style.removeProperty('overflow');
        elm.style.removeProperty('transition-duration');
        elm.style.removeProperty('transition-property');

        elm.classList.remove('transitioning');
    }, duration);
}
function slideDown(elm: HTMLElement, duration: number = 300): void {
    if (elm.classList.contains('transitioning')) return;

    elm.classList.add('transitioning');
    elm.style.removeProperty('display');

    // Ensure element is visible
    let display = window.getComputedStyle(elm).display;
    if (display === 'none') display = 'block';
    elm.style.display = display;

    const height = elm.offsetHeight;

    // Prepare for transition
    elm.style.overflow = 'hidden';
    elm.style.height = '0';
    elm.style.paddingTop = '0';
    elm.style.paddingBottom = '0';
    elm.style.marginTop = '0';
    elm.style.marginBottom = '0';

    // Force reflow
    void elm.offsetHeight;

    elm.style.boxSizing = 'border-box';
    elm.style.transitionProperty = 'height, margin, padding';
    elm.style.transitionDuration = `${duration}ms`;

    // Animate to full height
    elm.style.height = `${height}px`;

    // Reset paddings/margins so they animate naturally
    elm.style.removeProperty('padding-top');
    elm.style.removeProperty('padding-bottom');
    elm.style.removeProperty('margin-top');
    elm.style.removeProperty('margin-bottom');

    window.setTimeout(() => {
        // Cleanup inline styles
        elm.style.removeProperty('height');
        elm.style.removeProperty('overflow');
        elm.style.removeProperty('transition-duration');
        elm.style.removeProperty('transition-property');
        elm.classList.remove('transitioning');
    }, duration);
}
function slideToggle(elm: HTMLElement, duration = 300) {
    if (window.getComputedStyle(elm).display === 'none') {
        slideDown(elm, duration);
    } else {
        slideUp(elm, duration);
    }
}
var handleSidebarMenuToggle = function (menus: HTMLElement[], expandTime: number) {
    menus.map(function (menu) {
        menu.onclick = function (e) {
            e.preventDefault();
            var target = menu.nextElementSibling as HTMLElement;
            if (!target) return false;

            menus.map(function (m) {
                var otherTarget: HTMLElement | any = m.nextElementSibling;
                if (otherTarget !== target) {
                    slideUp(otherTarget, expandTime);
                    otherTarget.closest('.menu-item').classList.remove('expand');
                    otherTarget.closest('.menu-item').classList.add('closed');
                }
                return true;
            });

            var targetItemElm = target.closest('.menu-item') as HTMLElement | any;

            if (targetItemElm.classList.contains('expand') || (targetItemElm.classList.contains('active') && !target.style.display)) {
                targetItemElm.classList.remove('expand');
                targetItemElm.classList.add('closed');
                slideToggle(target, expandTime);
            } else {
                targetItemElm.classList.add('expand');
                targetItemElm.classList.remove('closed');
                slideToggle(target, expandTime);
            }
        };

        return true;
    });
};

export default function initSidebar() {
    const targetSidebar = document.querySelector<HTMLElement>('.app-sidebar:not(.app-sidebar-end)');
    const expandTime = targetSidebar?.getAttribute('data-disable-slide-animation') !== null ? 0 : 300;

    const menuBaseSelector = '.app-sidebar .menu > .menu-item.has-sub';
    const submenuBaseSelector = ' > .menu-submenu > .menu-item.has-sub';

    const menuLinkSelector = `${menuBaseSelector} > .menu-link`;
    const menus: HTMLElement[] = Array.from(document.querySelectorAll<HTMLElement>(menuLinkSelector));
    handleSidebarMenuToggle(menus, expandTime);

    // submenu lvl 1
    var submenuLvl1Selector = menuBaseSelector + submenuBaseSelector;
    var submenusLvl1 = [].slice.call(document.querySelectorAll(submenuLvl1Selector + ' > .menu-link'));
    handleSidebarMenuToggle(submenusLvl1, expandTime);
}
