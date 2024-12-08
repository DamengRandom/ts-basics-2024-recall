class Commitment {
    static PENDING = "pending";
    static FULFILLED = "fulfilled";
    static REJECTED = "rejected";

    private status: string;
    private result: any;
    private resolveCallBacks: any;
    private rejectCallBacks: any;


    constructor(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void)  {
        this.status = Commitment.PENDING;
        this.result = null;
        this.resolveCallBacks = [];
        this.rejectCallBacks = [];

        try {
            executor(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error);
        }
    }

    resolve(value: any) {
        const self = this;
        setTimeout(function() {
            if (self.status === Commitment.PENDING) {
                self.status = Commitment.FULFILLED;
                self.result = value;
                self.resolveCallBacks.forEach((cb: any) => {
                    cb(value);
                });
                // console.log('self.result: ', self.result);
            }

            return self;
        });
    }

    reject(reason?: any) {
        const self = this;
        setTimeout(function() {
            if (self.status === Commitment.PENDING) {
                self.status = Commitment.REJECTED;  
                self.result = reason;
                self.rejectCallBacks.forEach((cb: any) => {
                    cb(reason);
                });
                // console.log('error result: ', self.result, self.status);
            }

            return self;
        });
    }

    then(onFulfilled: (value: any) => void, onRejected: (reason?: any) => void) {
        if (this.status === Commitment.PENDING) {
            this.resolveCallBacks.push(onFulfilled);
            this.rejectCallBacks.push(onRejected);
            // console.log("🔥🔥🔥🔥🔥🔥🔥", this, onFulfilled, onRejected);
        }

        if (this.status === Commitment.FULFILLED) {
            const self = this;
            setTimeout(function() {
                onFulfilled(self.result);
            });
        }

        if (this.status === Commitment.REJECTED) {
            const self = this;
            setTimeout(function() {
                onRejected(self.result);
            });
        }
    }
}

console.log("Step 1");

const commitment = new Commitment((resolve, reject) => {
    setTimeout(() => {
        resolve("Damon");
        // reject("Celia");
        console.log("Step 2");
    });
    // reject("Celia");
    // throw new Error("Error Now ..");
});

commitment.then((result) => { console.log("After resolved then: ", result); }, (result) => { console.log("After rejected then: ", result); });

console.log("Step 3");
// console.log('result: ', commitment.result, commitment.status);
