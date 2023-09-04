import React from 'react';

const jestEmptyComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = () => null;

export default jestEmptyComponent;

/*
* Создали этот компонент, чтобы при тестировании
* jest вместо импортирования svg, которые могут быть внутри компонента,
* который тестируем, юзал вот такой компонент, который имитирует svg.

* Эта имитация возможна, т.к. вебпак мы настроили так, что все svg файлы
* импортируются как отдельные компоненты. SVGR лоадер делает это.
*/
