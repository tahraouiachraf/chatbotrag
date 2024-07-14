import {useState} from 'react';
import {TextField, Button} from "@vaadin/react-components";
import Markdown from "react-markdown";

export default function Chat() {
    const [question, setQuestion] = useState<String>("");
    const [response, setResponse] = useState<String>("");

    async function send() {
        ChatAiService.ragChat(question).then(response => {
            setResponse(response);
        })
    }

    return (
        <div>
            <h3>Chat bot</h3>
            <div>
                <TextField style={{width: '80%'}} onChange={e => setQuestion(e.target.value)}></TextField>
                <Button theme="primary" onClick={send}>Send</Button>

                <div>
                    <Markdown>
                        {response}
                    </Markdown>
                </div>

            </div>
        </div>
    );
}