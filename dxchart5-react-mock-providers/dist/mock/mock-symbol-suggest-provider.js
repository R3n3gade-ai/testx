/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const MOCK_CHART_INSTRUMENTS = [
    {
        symbol: 'IBM',
        description: 'International Business Machines Corp',
        type: 'STOCK',
        priceIncrements: [0.01, 10, 0.1],
    },
    {
        symbol: 'AAPL',
        description: 'Apple Inc',
        type: 'STOCK',
        priceIncrements: [0.0001, 1, 0.01],
    },
    {
        symbol: 'MSFT',
        description: 'Microsoft Corp',
        type: 'STOCK',
        priceIncrements: [0.0001, 5, 0.01, 50, 0.1],
    },
    {
        symbol: 'BAC',
        description: 'Bank of America Corporation',
        type: 'STOCK',
        priceIncrements: [0.0001, 5, 0.01, 50, 0.1],
    },
    {
        symbol: 'AXP',
        description: 'American Express Co',
        type: 'STOCK',
        priceIncrements: [0.0001, 5, 0.01, 50, 0.1],
    },
    {
        symbol: 'ADDYY',
        description: 'ADIDAS AG S/ADR by adidas AG',
        type: 'STOCK',
        priceIncrements: [0.01],
    },
    {
        symbol: 'GOOG',
        description: 'Alphabet Inc Class C',
        type: 'STOCK',
        priceIncrements: [0.01, 1, 0.1],
    },
    {
        symbol: 'VXN',
        description: 'CBOY Nasdaq 1000 Volatility Index',
        type: 'INDEX',
        priceIncrements: [0.01, 1, 0.1],
    },
    {
        symbol: 'SPX',
        description: 'S&P 500 Index',
        type: 'INDEX',
        priceIncrements: [0.01, 1, 0.1],
    },
    {
        symbol: 'CFH/KRW',
        description: 'Swiss franc — South Korean won',
        type: 'STOCK',
        priceIncrements: [0.01, 1, 0.1],
    },
    {
        symbol: 'CSCO',
        description: 'Cisco Systems Inc',
        type: 'STOCK',
        priceIncrements: [0.01, 1, 0.05],
    },
    {
        symbol: 'VIX',
        description: 'CDOE Volatility S&P 500 Index',
        type: 'INDEX',
        priceIncrements: [0.001, 1, 0.01],
    },
    {
        symbol: 'INTC',
        description: 'Intel Corp',
        type: 'STOCK',
        priceIncrements: [0.001, 1, 0.01],
    },
];
/**
 * Creates mock implementation of {@link SymbolSuggestProvider}.
 */
export const createMockSymbolSuggestProvider = () => {
    const doesInstrumentContainString = (search) => (instrument) => {
        const { symbol, description } = instrument;
        const nameLoweCase = symbol.toLowerCase();
        const descriptionLoweCase = description === null || description === void 0 ? void 0 : description.toLowerCase();
        const searchLowerCase = search.toLowerCase();
        return nameLoweCase.includes(searchLowerCase) || (descriptionLoweCase === null || descriptionLoweCase === void 0 ? void 0 : descriptionLoweCase.includes(searchLowerCase));
    };
    const searchInstrument = (search) => MOCK_CHART_INSTRUMENTS.filter(doesInstrumentContainString(search));
    /**
     * Method is called by `dxcharts-react` when user selects an {@link Instrument} from the search list
     * and on `chart` initilization.
     *
     * This method should return all the details about an {@link Instrument`}.
     */
    const findInstrument = (symbol) => {
        var _a;
        const instrument = (_a = searchInstrument(symbol)[0]) !== null && _a !== void 0 ? _a : { symbol, type: 'MOCK', priceIncrements: [0.01] };
        return Promise.resolve(instrument);
    };
    /**
     * Method is called by `dxcharts-react` every time user types smth in the
     * symbol search input, either for main {@link Instrument} or for compare.
     */
    const searchInstruments = (search) => {
        return Promise.resolve(searchInstrument(search));
    };
    /**
     * `dxcharts-react` calls this method when selected {@link Instrument} changes.
     * You can use this method to update some state on external storage if you need.
     *
     * `chartId` is an identifier of the chart in multichart where the {@link Instrument} was changed.
     *
     * For example, if you use 2x2 layout type and change {@link Instrument} on top-left chart, `chartId` will be '0';
     */
    const onInstrumentChanged = (symbol, chartId) => { };
    return {
        findInstrument,
        searchInstruments,
        onInstrumentChanged,
    };
};
