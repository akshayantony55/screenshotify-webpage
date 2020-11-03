import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import UrlSchema from './submitUrlSchems';

const initialValues = {
    url: ""
};
const HomePageComponent = () => {
    
    const handleSubmit = async (values) => {
        const response = await fetch(`/api/screenshot?url=${encodeURIComponent(values.url)}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const data = await response.text();
        var a = document.createElement("a");
        a.href = "data:image/png;base64," + data;
        a.download = "Image.png";
        a.click();
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={UrlSchema}
                onSubmit={handleSubmit}
            >
                {(formik) => {
                    const { errors, touched, isValid, dirty } = formik;
                    return (
                        <div className="container">
                            <h1>Please enter the url</h1>
                            <Form>
                                <div className="form-row">
                                    <label htmlFor="url">Url</label>
                                    <Field
                                        type="url"
                                        name="url"
                                        id="url"
                                        className={errors.url && touched.url ?
                                            "input-error" : null}
                                    />
                                    <ErrorMessage name="url" component="span" className="error" />
                                </div>

                                <button
                                    type="submit"
                                    className={!(dirty && isValid) ? "disabled-btn" : ""}
                                    disabled={!(dirty && isValid)}
                                >
                                    Submit
                                </button>
                            </Form>
                        </div>
                    );
                }}
            </Formik>
        </div>
    );
};

export default HomePageComponent;
