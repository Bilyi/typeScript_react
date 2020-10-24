export const getItems = async (callback: (list: object[]) => void, type: string) => {
    const searchType = type === 'movies' ? 'movie' : type;
    try {
        let response = await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json', {
            method: 'GET'
        });
        const data: { total: number, entries: [] } = await response.json();
        let itemsList: object[] = data.entries && data.entries.length ?
            data.entries.filter((item: { programType: string, releaseYear: number }) => {
                return item.programType === searchType && item.releaseYear >= 2010;
            }) : [];
        itemsList.forEach((item: { id: number }) => item.id = uuid());
        itemsList = itemsList.splice(0, 21);
        console.log('after', itemsList.length);
        itemsList = itemsList.sort((a: { title: any }, b: { title: any }) => {
            return a.title.toUpperCase() > b.title.toUpperCase() ? 1 : a.title.toUpperCase() === b.title.toUpperCase() ? 0 : -1;
        });
        callback(itemsList);
    } catch (error) {
        console.log('error', error);
    }
};

const uuid = () => {
    return Math.floor(Math.random() * (10000000000 - 1000000) + 1000000);
};