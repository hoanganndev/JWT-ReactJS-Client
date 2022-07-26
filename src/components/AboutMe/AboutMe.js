import React from "react";
import "./AboutMe.scss";
const AboutMe = () => {
    return (
        <div className="container about-me">
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingOne"
                    >
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne"
                        >
                            React:
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingOne"
                    >
                        <div className="accordion-body">
                            <strong>Some key features in the interface:</strong>{" "}
                            <ul>
                                <li>
                                    🌵 Phân trang khi hiển thị List (Pagination)
                                    : demo chức năng User và Roles
                                </li>
                                <li>
                                    🌵 Clone Element: demo chức năng Thêm nhiều
                                    Roles một lúc
                                </li>
                                <li>
                                    🌵 Sử dụng Ref để từ Parent gọi Child
                                    Functions
                                </li>
                                <li>🌵 Sử dụng React Context API</li>
                                <li>
                                    🌵 React Private Routes: check quyền người
                                    dùng ở Frontend
                                </li>
                                <li>
                                    🌵 Customize Axios: Tối ưu hóa việc call
                                    RESTful APIs
                                </li>
                                <li>
                                    🌵 Kết hợp React và Bootstrap 5 tạo giao
                                    diện Responsive
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingTwo"
                    >
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTwo"
                        >
                            NodeJS:
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingTwo"
                    >
                        <div className="accordion-body">
                            <strong>Some feature at server nodejs:</strong>{" "}
                            <ul>
                                <li>💦 Tạo Restful API</li>
                                <li>💦 Sử Dụng JWT: Json web token</li>
                                <li>
                                    💦 Middleware check người dùng đã đăng nhập
                                    ? check quyền hạn người dùng ?
                                </li>
                                <li>
                                    💦 Sử dụng Cookies và Bearer Token Header để
                                    định danh người dùng
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingThree"
                    >
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree"
                        >
                            Database SQL
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingThree"
                    >
                        <div className="accordion-body">
                            <strong>Create a database authorized user:</strong>
                            <ul>
                                <li>
                                    🌺 Học & Hiểu các bước phân tích khi có yêu
                                    cầu của project (requirements)
                                </li>
                                <li>
                                    🌺 Cách thiết kế database cho dự án cần phân
                                    quyền người dùng
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
