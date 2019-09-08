/**
 * DelayedCall -> give possibility to run function with some delay and stop it
 */
export class DelayedCall {
    private _callBack : () => void;
    private _timeToRun : number;
    private _timer : number;

    constructor(callback: () => void, timeToRun : number) {
        this._callBack = callback;
        this._timeToRun = timeToRun;
    }

    public run() {
        clearTimeout(this._timer);
        this._timer = window.setTimeout(this._callBack, this._timeToRun)
    }

    public stop() {
        clearTimeout(this._timer);
    }
}