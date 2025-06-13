import './style.css';
import Story from './story/index.jsx';
export default function Stories() {
    return (
        <div className="stories">
            <Story type="new"/>
            <Story type="old"/>
            <Story type="old"/>
            <Story type="old" />
            <Story type="old" />
            
        </div>
    );
}