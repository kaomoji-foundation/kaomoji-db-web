export type Notification = {
    type: "sucess" | "error" | "warn" | "info";
    msg: string;
    dimisable?: boolean;
    // time out in seconds
    timeout?: number;
    id?: number;
};

