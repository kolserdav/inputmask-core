export = InputMask;
declare function InputMask(options: any): InputMask;
declare class InputMask {
    constructor(options: any);
    placeholderChar: any;
    formatCharacters: any;
    /**
     * Applies a single character of input based on the current selection.
     * @param {string} char
     * @return {boolean} true if a change has been made to value or selection as a
     *   result of the input, false otherwise.
     */
    input(char: string): boolean;
    _historyIndex: number | null | undefined;
    _lastOp: any;
    _lastSelection: any;
    /**
     * Attempts to delete from the value based on the current cursor position or
     * selection.
     * @return {boolean} true if the value or selection changed as the result of
     *   backspacing, false otherwise.
     */
    backspace(): boolean;
    /**
     * Attempts to paste a string of input at the current cursor position or over
     * the top of the current selection.
     * Invalid content at any position will cause the paste to be rejected, and it
     * may contain static parts of the mask's pattern.
     * @param {string} input
     * @return {boolean} true if the paste was successful, false otherwise.
     */
    paste(input: string): boolean;
    undo(): boolean;
    value: any;
    selection: any;
    redo(): boolean;
    setPattern(pattern: any, options: any): void;
    pattern: Pattern | undefined;
    emptyValue: string | undefined;
    setSelection(selection: any): boolean;
    setValue(value: any): void;
    getValue(): any;
    getRawValue(): any;
    _resetHistory(): void;
    _history: any[] | undefined;
}
declare namespace InputMask {
    export { Pattern };
}
/**
 * @param {string} source
 * @patam {?Object} formatCharacters
 */
declare function Pattern(source: string, formatCharacters: any, placeholderChar: any, isRevealingMask: any): Pattern;
declare class Pattern {
    /**
     * @param {string} source
     * @patam {?Object} formatCharacters
     */
    constructor(source: string, formatCharacters: any, placeholderChar: any, isRevealingMask: any);
    /** Placeholder character */
    placeholderChar: any;
    /** Format character definitions. */
    formatCharacters: any;
    /** Pattern definition string with escape characters. */
    source: string | undefined;
    /** Pattern characters after escape characters have been processed. */
    pattern: any[] | undefined;
    /** Length of the pattern after escape characters have been processed. */
    length: number | undefined;
    /** Index of the first editable character. */
    firstEditableIndex: number | null;
    /** Index of the last editable character. */
    lastEditableIndex: number | null;
    /** Lookup for indices of editable characters in the pattern. */
    _editableIndices: {} | undefined;
    /** If true, only the pattern before the last valid value character shows. */
    isRevealingMask: any;
    _parse(): void;
    /**
     * @param {Array<string>} value
     * @return {Array<string>}
     */
    formatValue(value: Array<string>): Array<string>;
    /**
     * @param {number} index
     * @return {boolean}
     */
    isEditableIndex(index: number): boolean;
    /**
     * @param {string} char
     * @param {number} index
     * @return {boolean}
     */
    isValidAtIndex(char: string, index: number): boolean;
    transform(char: any, index: any): any;
}
//# sourceMappingURL=index.d.ts.map