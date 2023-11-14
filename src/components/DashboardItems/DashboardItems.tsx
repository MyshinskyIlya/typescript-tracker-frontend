import { FC } from "react";
import menu from "../../images/icon-ellipsis.svg";

const periods: string[] = ["day", "week", "month"];

interface Itimeframe {
    daily: {
        current: number;
        previous: number;
    };
    weekly: {
        current: number;
        previous: number;
    };
    monthly: {
        current: number;
        previous: number;
    };
}

type DashboardItemsProps = {
    type: string;
    timeframes: Itimeframe;
    activePeriod: number;
};

export const DashboardItems: FC<DashboardItemsProps> = ({
    type,
    timeframes,
    activePeriod,
}) => {
    const activePeriodFn = () => {
        if (activePeriod === 0) {
            return timeframes.daily.previous;
        }

        if (activePeriod === 1) {
            return timeframes.weekly.previous;
        }

        if (activePeriod === 2) {
            return timeframes.monthly.previous;
        }
    };

    const activeCurrentTimeFn = () => {
        if (activePeriod === 0) {
            return timeframes.daily.current;
        }

        if (activePeriod === 1) {
            return timeframes.weekly.current;
        }

        if (activePeriod === 2) {
            return timeframes.monthly.current;
        }
    };

    activePeriodFn();
    return (
        <div className={`dashboard__item dashboard__item--${type}`}>
            <article className="tracking-card">
                <div className="tracking-card__header">
                    <h4 className="tracking-card__title">
                        {type[0].toUpperCase() + type.slice(1)}
                    </h4>
                    <img
                        className="tracking-card__menu"
                        src={menu}
                        alt="menu"
                    />
                </div>
                <div className="tracking-card__body">
                    <div className="tracking-card__time">
                        {activeCurrentTimeFn()}hrs
                    </div>
                    <div className="tracking-card__prev-period">
                        Last {periods[activePeriod]} - {activePeriodFn()}hrs
                    </div>
                </div>
            </article>
        </div>
    );
};
