declare class studentservice {
    private Repository;
    constructor();
    getAll: () => Promise<any>;
    add: (student: any) => Promise<void>;
    update: (id: any, student: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    finByName: (name: any) => Promise<any>;
    ASC: () => Promise<any>;
    DESC: () => Promise<any>;
}
declare const _default: studentservice;
export default _default;
