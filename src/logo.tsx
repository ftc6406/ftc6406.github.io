function Logo({height}: {height: number}) {
    console.log(height);

    return (
        <img
            id="logo"
            className={`object-scale-down h-${height} w-${height} p-${height} m-${height} -mb-${height}`}
            src="./src/assets/logo.png"
        />
    );
}

export default Logo;
