import { themes, useTheme } from './ThemeContext';

const App = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <div className="app" style={{ backgroundColor: theme.background }}>
      <h1 style={{ color: theme.color }}>Hello Context API</h1>
      <div className="theme-container">
        {Object.keys(themes).map((key) => {
          return (
            <div
              key={key}
              className="theme-item"
              onClick={() => changeTheme(key)}
              style={{ backgroundColor: themes[key].background }}
            >
              <span style={{ color: themes[key].color }}>{key}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
