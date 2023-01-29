export function debounce<T extends Function>(callback: T, timeout = 750) {
    let h = 0;
    const callable = (...args: any) => {
        clearTimeout(h);
        h = setTimeout(() => callback(...args), timeout);
    };
    return <T>(<any>callable);
}
