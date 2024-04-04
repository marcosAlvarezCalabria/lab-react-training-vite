import profiles from "../../data/berlin.json";

function FaceBook() {
    return (
        <div className="container">
            <div className="row">
                {profiles.map((profile, index) => (
                    <div className="col-md-3 mb-3" key={index}>
                        <div className="card">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={profile.img} className="card-img" alt="Profile" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-title"><strong>First name:</strong> {profile.firstName}</p>
                                        <p className="card-text"><strong>Last name:</strong> {profile.lastName}</p>
                                        <p className="card-text"> <strong>Country:</strong> {profile.country}</p>
                                        <p className="card-text"><strong>Type: </strong>{profile.isStudent ? "Student" : "Teacher"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FaceBook;
