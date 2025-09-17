// import PropTypes from 'prop-types'
function Student(props) {
    return (
        <>
            <div className="student-div">
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Student: {props.isStudent ? "Yes" : "No"}</p>
            </div>
        </>
    );
}

// Student.PropTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number,
//     isStudent: PropTypes.bool,
// }

// Student.defaultProps = {
//   name: "Guest",
//   age: 0,
//   isStudent: false,
// }
// FOR ABOVE COMMENTED CODE TO WORK I NEED TO INSTALL THE prop-type DEPENDENCY. (npm install prop-type)
// THOUGH IT IS PREFERRED TO USE TYPESCRIPT FOR TYPE SAFETY.

export default Student;