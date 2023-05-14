const enum statusCode {
    DRAFT = "draft",
    DELETED = "deleted",
    PUBLISHED = "published",
}

async function getFaqs(req: { topicId: number; status?: statusCode }): Promise<{
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: statusCode;
}[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}

// // Request
// {
//     "topicId": 5,
//     "status": "published" // "draft", "deleted" (optional)
// }

// // Response
// [
//     {
//         "question": "How is the delivery?",
//         "answer": "quick!",
//         "tags": [
//             "popular",
//             "new"
//         ],
//         "likes": 3,
//         "status": "published"
//     }
// ]