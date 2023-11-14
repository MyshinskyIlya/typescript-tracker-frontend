import { FC, useState } from "react";

import photo from "./images/image-jeremy.png";
import { DashboardItems } from "./components/DashboardItems/DashboardItems";

export const App: FC = () => {
    // Представим, что здесь запрос на сервер, который был бы реализован хуком useEffect при помощи библиотеки axios, результат запроса с помощью Redux@toolkit передан в store. Но так как проект небольшой, воспользовался просто useState :))
    const [items] = useState([
        {
            id: 1,
            type: "work",
            timeframes: {
                daily: {
                    current: 5,
                    previous: 7,
                },
                weekly: {
                    current: 32,
                    previous: 36,
                },
                monthly: {
                    current: 103,
                    previous: 128,
                },
            },
        },
        {
            id: 2,
            type: "play",
            timeframes: {
                daily: {
                    current: 1,
                    previous: 2,
                },
                weekly: {
                    current: 10,
                    previous: 8,
                },
                monthly: {
                    current: 23,
                    previous: 29,
                },
            },
        },
        {
            id: 3,
            type: "study",
            timeframes: {
                daily: {
                    current: 0,
                    previous: 1,
                },
                weekly: {
                    current: 4,
                    previous: 7,
                },
                monthly: {
                    current: 13,
                    previous: 19,
                },
            },
        },
        {
            id: 4,
            type: "exercise",
            timeframes: {
                daily: {
                    current: 1,
                    previous: 1,
                },
                weekly: {
                    current: 4,
                    previous: 5,
                },
                monthly: {
                    current: 11,
                    previous: 18,
                },
            },
        },
        {
            id: 5,
            type: "social",
            timeframes: {
                daily: {
                    current: 1,
                    previous: 3,
                },
                weekly: {
                    current: 5,
                    previous: 10,
                },
                monthly: {
                    current: 21,
                    previous: 23,
                },
            },
        },
        {
            id: 6,
            type: "self-care",
            timeframes: {
                daily: {
                    current: 0,
                    previous: 1,
                },
                weekly: {
                    current: 2,
                    previous: 2,
                },
                monthly: {
                    current: 7,
                    previous: 11,
                },
            },
        },
    ]);

    const [activePeriod, setActivePeriod] = useState(0);

    return (
        <>
            <section className="dashboard">
                <div className="dashboard__content">
                    <div className="dashboard__person">
                        <div className="info-card">
                            <img
                                src={photo}
                                alt="person"
                                className="info-card__photo"
                            />
                            <div className="info-card__text">
                                <p className="info-card__subtitle">
                                    Report for
                                </p>
                                <h3 className="info-card__title">
                                    Jeremy Robson
                                </h3>
                            </div>
                        </div>
                        <div className="view-selector">
                            <div
                                className={
                                    activePeriod === 0
                                        ? "view-selector__item view-selector__item--active"
                                        : "view-selector__item"
                                }
                                onClick={() => setActivePeriod(0)}
                            >
                                Daily
                            </div>
                            <div
                                className={
                                    activePeriod === 1
                                        ? "view-selector__item view-selector__item--active"
                                        : "view-selector__item"
                                }
                                onClick={() => setActivePeriod(1)}
                            >
                                Weekly
                            </div>
                            <div
                                className={
                                    activePeriod === 2
                                        ? "view-selector__item view-selector__item--active"
                                        : "view-selector__item"
                                }
                                onClick={() => setActivePeriod(2)}
                            >
                                Mountly
                            </div>
                        </div>
                    </div>
                    {items.map((item) => (
                        <DashboardItems
                            key={item.id}
                            type={item.type}
                            activePeriod={activePeriod}
                            timeframes={item.timeframes}
                        ></DashboardItems>
                    ))}
                </div>
            </section>
        </>
    );
};
