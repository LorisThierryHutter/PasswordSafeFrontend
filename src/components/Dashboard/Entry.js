import React, { useState } from 'react';
import { copyToClipboard } from '../../utils/copyToClipboard';
import auth from "../../services/auth";
import entry from "../../services/entry";

const [isCopied, setIsCopied] = useState(false);

class Entry extends React.Component{
    componentDidMount(){
        entry.getEntries().then((response) => {
            this.setState({entries: response.data})
        });
    }
    componentDidMount(){
        entry.updateEntries().then((response) => {
            this.setState({entries: response.data})
        });
    }
    componentDidMount(){
        entry.deleteEntries().then((response) => {
            this.setState({entries: response.data})
        });
    }
    render() {
        return (
            <div>
                <div>
                    {entry.icon ? <img src={entry.icon} alt="Website Icon" /> : <div>Placeholder</div>}
                    <span>{entry.websiteUrl}</span>
                </div>
                <div>
                    <span>{entry.username}</span>
                    <button onClick={() => handleCopy(entry.username)}>Copy Username</button>
                </div>
                <div>
                    {entry.password.split('').map((char, index) => (
                        <span key={index} style={{ marginRight: '5px' }}>
            {isCopied && index === 0 ? entry.password : '•'}
          </span>
                    ))}
                    <button onClick={() => handleCopy(entry.password)}>Copy Password</button>
                </div>
            </div>
        );
    }


}
const handleCopy = (text) => {
    copyToClipboard(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 10000); // Reset copied status after 10 seconds
};

export default Entry;
