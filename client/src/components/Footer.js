import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext.js';
import translationsData from '../translationsData.json';

const Footer = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const translations = translationsData[language].footer;

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <h3>{translations.title}</h3>
            <div
                style={{
                    display: "flex",
                    alignContent: "center",
                }}
            >
                <span
                    style={{
                        marginRight: "12px"
                    }}
                >
                    {translations.available}
                </span>
                <div>
                    <span
                        className={`language-picker ${language === "vn" ? "selected" : ""}`}
                        style={{
                            marginRight: "10px",
                            fontWeight: language === "vn" ? "bold" : "normal"
                        }}
                        onClick={() => handleLanguageChange("vn")}
                    >
                        VN
                    </span>
                    <span
                        style={{
                            fontWeight: language === "en" ? "bold" : "normal"
                        }}
                        className={`language-picker ${language === "en" ? "selected" : ""}`}
                        onClick={() => handleLanguageChange("en")}
                    >
                        US
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;