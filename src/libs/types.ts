// You can define interfaces for all React components here.
// Do not forget to export properly.

interface ReplyProps {
    ImagePath : any;
    username : string;
    replyTitle :string;
    likes : number;

}
export type { ReplyProps };

interface PostOwnnerProps {
    ImagePath : any;
    username : string;
    likes : number;
    id : number;

}
export type { PostOwnnerProps };


interface CommentProps {
    ImagePath : any;
    username : string;
    commentTitle : string;
    replies : string;
    likes : number;

}
export type { CommentProps };

