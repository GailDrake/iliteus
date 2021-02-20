import React from "react"
import LayoutWrapper from "../../components/LayoutWrapper"
import Container from "../../templates/container"
import Button from "../../components/Button"

const NotFoundPage = () => {
    return (
        <LayoutWrapper>
            <Container
                title="Page Not Found"
                subtitle="The page you attempted to visit was either moved or does not exist"
                bannerImage="not__found_banner"
            >
                <div className="page-not-found"> 
                    <h1 className="page-not-found__header">Please refer to the top right of the page to relocate to the correct page</h1>
                    <p className="page-not-found__p">
                        Here are some other links that may be helpful
                        <ul>
                                <Button
                                    link="https://www.firstinspires.org/"
                                    division="frc"
                                    className="page-not-found__button"
                                >
                                    First Inspires
                                </Button>
                                <Button
                                    link="https://www.firstchesapeake.org/first-programs/frc"
                                    division="frc"
                                    className="page-not-found__button"
                                >
                                    First Chesapeake
                                </Button>
                        </ul>
                    </p>
                </div>
            </Container>
        </LayoutWrapper>
    )
}

export default NotFoundPage