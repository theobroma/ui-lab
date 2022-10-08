import { Button, BUTTON_VARIANTS } from "./lib";

function App() {
    // обработчик нажатия кнопки
    // принимает вариант кнопки
    const onClick = (variant: string) => {
        // выводим сообщение в консоль инструментов разработчика в браузере
        console.log(`${variant} button clicked`);
    };

    return (
        <>
            {/* дефолтная кнопка */}
            <Button onClick={() => onClick("primary")}>primary</Button>
            {/* заблокированная кнопка */}
            <Button onClick={() => onClick("disabled")} disabled>
                disabled
            </Button>
            {/* успех */}
            <Button
                variant={BUTTON_VARIANTS.SUCCESS}
                onClick={() => onClick(BUTTON_VARIANTS.SUCCESS)}
            >
                {BUTTON_VARIANTS.SUCCESS}
            </Button>
            {/* предупреждение */}
            <Button
                variant={BUTTON_VARIANTS.WARNING}
                onClick={() => onClick(BUTTON_VARIANTS.WARNING)}
            >
                {BUTTON_VARIANTS.WARNING}
            </Button>
            {/* опасность */}
            <Button
                variant={BUTTON_VARIANTS.DANGER}
                onClick={() => onClick(BUTTON_VARIANTS.DANGER)}
            >
                {BUTTON_VARIANTS.DANGER}
            </Button>
        </>
    );
}

export default App;
