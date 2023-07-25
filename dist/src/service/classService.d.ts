declare class classService {
    private Repository;
    constructor();
    getAll: () => Promise<any>;
    add: (Class: any) => Promise<void>;
    update: (id: any, Class: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    finByName: (name: any) => Promise<any>;
}
declare const _default: classService;
export default _default;
