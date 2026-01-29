import Student from './Student.jsx';

function App() {
    return(
        <>
        <Student name="spongebob" age={30} isStudent={true}/>
        <Student name="patrick" age={42} isStudent={false}/>
        <Student name="Squidward" age={50} isStudent={false} />
        <Student name="sandy" age={27} isStudent={true} />
        <Student name="Larry"/>
        </>
    );
}

export default App
