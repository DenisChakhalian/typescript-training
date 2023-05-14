type ReadOrWrite = "read" | "write";
type Bulk = "bulk" | "";

// type Access2 = `can${ReadOrWrite}`;                  //:"canread" | "canwrite"
// type Access3 = `can${Uppercase<ReadOrWrite>}`;       //:"canREAD" | "canWRITE"
type Access = `can${Capitalize<ReadOrWrite>}`;        //:"canRead" | "canWrite"
type AccessBulk = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`;       //:"canReadBulk" | "canRead" | "canWriteBulk" | "canWrite"

type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never;

type T = ReadOrWriteBulk<AccessBulk>;       //: "ReadBulk" | "Read" | "WriteBulk" | "Write"

type ErrorOrSuccess = "error" | "success";

type ResponseTy = {
    result: `http${Capitalize<ErrorOrSuccess>}`
}

const a: ResponseTy = {
    result: "httpError"   //: "httpError" | "httpSuccess"
}