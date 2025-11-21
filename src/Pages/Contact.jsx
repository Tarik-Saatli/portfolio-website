const Contact = () => {
    return (
        <section className="contactPage">
            <section className="contact">
                <h1>CONTACT ME</h1>
            </section>


            <section className="form-section">
                <form action="">
                    <input type="text:" placeholder="NAME" />

                    <input type="text:" placeholder="EMAIL" />

                    <textarea type="text:" placeholder="BERICHT" />

                    <button className="contact-knop" >SEND</button>
                </form>
            </section>

        </section>



    );
}

export default Contact;