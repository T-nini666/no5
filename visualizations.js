// 数据可视化第5章 - 交互式可视化JavaScript代码

// 初始数据存储
const initialData = {
    productSales: {
        months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        productA: [20, 28, 23, 16, 29, 36, 39, 33, 31, 19, 21, 25],
        productB: [17, 22, 39, 26, 35, 23, 25, 27, 29, 38, 28, 20]
    },
    petOwnership: {
        countries: ['中国', '加拿大', '巴西', '澳大利亚', '日本', '墨西哥', '俄罗斯', '韩国', '瑞士', '土耳其', '英国', '美国'],
        catOwners: [19, 33, 28, 29, 14, 24, 57, 6, 26, 15, 27, 39],
        dogOwners: [25, 33, 58, 39, 15, 64, 29, 23, 22, 11, 27, 50]
    },
    douyin: {
        cities: ['一线城市', '二线城市', '三线城市', '四线及以外', '其他国家及地区'],
        growthMultiples: [51, 73, 99, 132, 45],
        distribution2017: [21, 35, 22, 19, 3],
        distribution2018: [13, 32, 27, 27, 1]
    },
    temperature: {
        months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        temperature: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 33.4, 23.0, 16.5, 12.0, 6.2],
        precipitation: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        evaporation: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
    },
    subplotData: {
        subplots: [
            { x: [1, 2, 3, 4, 5], y: [1, 2, 3, 4, 5] },
            { x: [1, 2, 3, 4, 5], y: [5, 4, 3, 2, 1] },
            { x: [1, 2, 3, 4, 5], y: [2, 3, 1, 4, 5] },
            { x: [1, 2, 3, 4, 5], y: [3, 1, 4, 2, 5] }
        ]
    }
};

// 当前数据状态
let currentData = JSON.parse(JSON.stringify(initialData));

// ===== 产品销售额分析 =====

// 初始化产品销售额数据表格
function initProductSalesTable() {
    const tbody = document.getElementById('productSalesTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    currentData.productSales.months.forEach((month, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${month}</td>
            <td><input type="number" value="${currentData.productSales.productA[index]}" data-index="${index}" data-type="productA"></td>
            <td><input type="number" value="${currentData.productSales.productB[index]}" data-index="${index}" data-type="productB"></td>
        `;
        tbody.appendChild(row);
    });
}

// 应用产品销售额数据
function applyProductSalesData() {
    const inputs = document.querySelectorAll('#productSalesTableBody input');
    
    inputs.forEach(input => {
        const index = parseInt(input.getAttribute('data-index'));
        const type = input.getAttribute('data-type');
        const value = parseFloat(input.value) || 0;
        
        currentData.productSales[type][index] = value;
    });
    
    updateProductSalesChart();
    showMessage('产品销售额数据已更新！');
}

// 重置产品销售额数据
function resetProductSalesData() {
    currentData.productSales = JSON.parse(JSON.stringify(initialData.productSales));
    initProductSalesTable();
    updateProductSalesChart();
    showMessage('产品销售额数据已重置！');
}

// ===== 养猫养狗人群比例 =====

// 初始化养猫养狗人群比例数据表格
function initPetOwnershipTable() {
    const tbody = document.getElementById('petOwnershipTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    currentData.petOwnership.countries.forEach((country, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${country}</td>
            <td><input type="number" value="${currentData.petOwnership.catOwners[index]}" data-index="${index}" data-type="catOwners"></td>
            <td><input type="number" value="${currentData.petOwnership.dogOwners[index]}" data-index="${index}" data-type="dogOwners"></td>
        `;
        tbody.appendChild(row);
    });
}

// 应用养猫养狗人群比例数据
function applyPetOwnershipData() {
    const inputs = document.querySelectorAll('#petOwnershipTableBody input');
    
    inputs.forEach(input => {
        const index = parseInt(input.getAttribute('data-index'));
        const type = input.getAttribute('data-type');
        const value = parseFloat(input.value) || 0;
        
        currentData.petOwnership[type][index] = value;
    });
    
    updatePetOwnershipChart();
    showMessage('养猫养狗人群比例数据已更新！');
}

// 重置养猫养狗人群比例数据
function resetPetOwnershipData() {
    currentData.petOwnership = JSON.parse(JSON.stringify(initialData.petOwnership));
    initPetOwnershipTable();
    updatePetOwnershipChart();
    showMessage('养猫养狗人群比例数据已重置！');
}

// ===== 抖音用户分析 =====

// 初始化抖音用户分析数据表格
function initDouyinTable() {
    const tbody = document.getElementById('douyinTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    currentData.douyin.cities.forEach((city, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${city}</td>
            <td><input type="number" value="${currentData.douyin.growthMultiples[index]}" data-index="${index}" data-type="growthMultiples"></td>
            <td><input type="number" value="${currentData.douyin.distribution2017[index]}" data-index="${index}" data-type="distribution2017"></td>
            <td><input type="number" value="${currentData.douyin.distribution2018[index]}" data-index="${index}" data-type="distribution2018"></td>
        `;
        tbody.appendChild(row);
    });
}

// 应用抖音用户分析数据
function applyDouyinData() {
    const inputs = document.querySelectorAll('#douyinTableBody input');
    
    inputs.forEach(input => {
        const index = parseInt(input.getAttribute('data-index'));
        const type = input.getAttribute('data-type');
        const value = parseFloat(input.value) || 0;
        
        currentData.douyin[type][index] = value;
    });
    
    updateDouyinChart();
    showMessage('抖音用户分析数据已更新！');
}

// 重置抖音用户分析数据
function resetDouyinData() {
    currentData.douyin = JSON.parse(JSON.stringify(initialData.douyin));
    initDouyinTable();
    updateDouyinChart();
    showMessage('抖音用户分析数据已重置！');
}

// ===== 气温与降水量 =====

// 初始化气温与降水量数据表格
function initTemperatureTable() {
    const tbody = document.getElementById('temperatureTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    currentData.temperature.months.forEach((month, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${month}</td>
            <td><input type="number" step="0.1" value="${currentData.temperature.temperature[index]}" data-index="${index}" data-type="temperature"></td>
            <td><input type="number" step="0.1" value="${currentData.temperature.precipitation[index]}" data-index="${index}" data-type="precipitation"></td>
            <td><input type="number" step="0.1" value="${currentData.temperature.evaporation[index]}" data-index="${index}" data-type="evaporation"></td>
        `;
        tbody.appendChild(row);
    });
}

// 应用气温与降水量数据
function applyTemperatureData() {
    const inputs = document.querySelectorAll('#temperatureTableBody input');
    
    inputs.forEach(input => {
        const index = parseInt(input.getAttribute('data-index'));
        const type = input.getAttribute('data-type');
        const value = parseFloat(input.value) || 0;
        
        currentData.temperature[type][index] = value;
    });
    
    updateTemperatureChart();
    showMessage('气温与降水量数据已更新！');
}

// 重置气温与降水量数据
function resetTemperatureData() {
    currentData.temperature = JSON.parse(JSON.stringify(initialData.temperature));
    initTemperatureTable();
    updateTemperatureChart();
    showMessage('气温与降水量数据已重置！');
}

// ===== 子图布局示例 =====

// 初始化子图数据表格
function initSubplotTable() {
    const tbody = document.getElementById('subplotDataTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    currentData.subplotData.subplots.forEach((subplot, subplotIndex) => {
        subplot.x.forEach((xVal, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>子图${subplotIndex + 1}</td>
                <td><input type="number" value="${xVal}" data-subplot="${subplotIndex}" data-index="${index}" data-type="x"></td>
                <td><input type="number" value="${subplot.y[index]}" data-subplot="${subplotIndex}" data-index="${index}" data-type="y"></td>
            `;
            tbody.appendChild(row);
        });
    });
}

// 应用子图数据
function applySubplotData() {
    const inputs = document.querySelectorAll('#subplotDataTableBody input');
    
    inputs.forEach(input => {
        const subplotIndex = parseInt(input.getAttribute('data-subplot'));
        const index = parseInt(input.getAttribute('data-index'));
        const type = input.getAttribute('data-type');
        const value = parseFloat(input.value) || 0;
        
        currentData.subplotData.subplots[subplotIndex][type][index] = value;
    });
    
    updateSubplotLayouts();
    showMessage('子图数据已更新！');
}

// 重置子图数据
function resetSubplotData() {
    currentData.subplotData = JSON.parse(JSON.stringify(initialData.subplotData));
    initSubplotTable();
    updateSubplotLayouts();
    showMessage('子图数据已重置！');
}

// ===== 图表更新函数 =====

// 1. 产品销售额分析图表
function updateProductSalesChart() {
    const chartTypeElement = document.getElementById('chartType');
    const showAnnotationsElement = document.getElementById('showAnnotations');
    
    if (!chartTypeElement || !document.getElementById('productSalesChart')) return;
    
    const chartType = chartTypeElement.value;
    const showAnnotations = showAnnotationsElement ? showAnnotationsElement.checked : false;
    
    let layout = {
        title: '产品A与产品B的销售额分析',
        xaxis: { title: '月份' },
        yaxis: { title: '销售额(亿元)' },
        showlegend: true,
        height: 400
    };
    
    let traces = [];
    
    if (chartType === 'line') {
        // 折线图
        traces.push({
            x: currentData.productSales.months,
            y: currentData.productSales.productA,
            type: 'scatter',
            mode: 'lines+markers',
            name: '产品A',
            line: { color: '#FF00FF', dash: 'dash', width: 2 },
            marker: { size: 8 }
        });
        
        traces.push({
            x: currentData.productSales.months,
            y: currentData.productSales.productB,
            type: 'scatter',
            mode: 'lines+markers',
            name: '产品B',
            line: { color: '#00FF00', dash: 'dash', width: 2 },
            marker: { size: 8 }
        });
        
        if (showAnnotations) {
            layout.annotations = [];
            currentData.productSales.productA.forEach((value, index) => {
                layout.annotations.push({
                    x: currentData.productSales.months[index],
                    y: value,
                    text: value.toString(),
                    showarrow: false,
                    yshift: 10
                });
            });
            
            currentData.productSales.productB.forEach((value, index) => {
                layout.annotations.push({
                    x: currentData.productSales.months[index],
                    y: value,
                    text: value.toString(),
                    showarrow: false,
                    yshift: -20
                });
            });
        }
    } else {
        // 柱状图
        traces.push({
            x: currentData.productSales.months,
            y: currentData.productSales.productA,
            type: 'bar',
            name: '产品A',
            marker: { color: '#FF00FF' }
        });
        
        traces.push({
            x: currentData.productSales.months,
            y: currentData.productSales.productB,
            type: 'bar',
            name: '产品B',
            marker: { color: '#00FF00' }
        });
    }
    
    Plotly.newPlot('productSalesChart', traces, layout);
}

// 2. 养猫养狗人群比例图表
function updatePetOwnershipChart() {
    const countryFilterElement = document.getElementById('countryFilter');
    if (!countryFilterElement || !document.getElementById('petOwnershipChart')) return;
    
    const countryFilter = countryFilterElement.value;
    
    let filteredCountries = currentData.petOwnership.countries;
    let filteredCatOwners = currentData.petOwnership.catOwners;
    let filteredDogOwners = currentData.petOwnership.dogOwners;
    
    if (countryFilter === 'asia') {
        // 亚洲国家：中国、日本、韩国
        const asiaIndices = [0, 4, 7];
        filteredCountries = asiaIndices.map(i => currentData.petOwnership.countries[i]);
        filteredCatOwners = asiaIndices.map(i => currentData.petOwnership.catOwners[i]);
        filteredDogOwners = asiaIndices.map(i => currentData.petOwnership.dogOwners[i]);
    } else if (countryFilter === 'europe') {
        // 欧美国家：加拿大、澳大利亚、瑞士、英国、美国
        const europeIndices = [1, 3, 8, 10, 11];
        filteredCountries = europeIndices.map(i => currentData.petOwnership.countries[i]);
        filteredCatOwners = europeIndices.map(i => currentData.petOwnership.catOwners[i]);
        filteredDogOwners = europeIndices.map(i => currentData.petOwnership.dogOwners[i]);
    }
    
    const trace1 = {
        x: filteredCatOwners,
        y: filteredCountries,
        type: 'bar',
        orientation: 'h',
        name: '养猫人群比例',
        marker: { color: '#FFA500' }
    };
    
    const trace2 = {
        x: filteredDogOwners,
        y: filteredCountries,
        type: 'bar',
        orientation: 'h',
        name: '养狗人群比例',
        marker: { color: '#20B2AA' }
    };
    
    const layout = {
        title: '部分国家养猫与养狗人群比例分析',
        barmode: 'group',
        xaxis: { title: '人群比例(%)' },
        yaxis: { title: '国家' },
        showlegend: true,
        height: 400
    };
    
    Plotly.newPlot('petOwnershipChart', [trace1, trace2], layout);
}

// 3. 抖音用户分析图表
function updateDouyinChart() {
    const yearSelectElement = document.getElementById('yearSelect');
    if (!yearSelectElement || !document.getElementById('douyinChart')) return;
    
    const yearSelect = yearSelectElement.value;
    
    // 创建子图布局
    const layout = {
        grid: { rows: 2, columns: 2, pattern: 'independent' },
        height: 450,
        showlegend: false,
        margin: { t: 100, r: 40, b: 80, l: 80 }
    };
    
    const traces = [];
    
    // 增长倍数柱状图 (占据第1行，跨2列)
    traces.push({
        x: currentData.douyin.cities,
        y: currentData.douyin.growthMultiples,
        type: 'bar',
        marker: { color: '#20B2AA' },
        name: '增长倍数',
        xaxis: 'x1',
        yaxis: 'y1'
    });
    
    // 使用简化的城市名称以避免重叠
    const simplifiedCities = ['一线', '二线', '三线', '四线', '其他'];
    
    layout.xaxis1 = { 
        domain: [0, 1], 
        anchor: 'y1', 
        title: { text: '城市类型', standoff: 25 },
        tickvals: currentData.douyin.cities,
        ticktext: simplifiedCities,
        tickangle: 0,
        automargin: true,
        tickmode: 'array',
        tickfont: { size: 12 },
        ticklen: 5,
        tickwidth: 2,
        ticks: 'outside',
        showgrid: true,
        zeroline: false
    };
    layout.yaxis1 = { 
        domain: [0.55, 1], 
        anchor: 'x1', 
        title: { text: '增长倍数', standoff: 20 },
        automargin: true,
        tickfont: { size: 12 },
        gridcolor: 'rgba(0,0,0,0.1)',
        zeroline: false
    };
    layout.annotations = [{
        x: 0.02,
        y: 0.98,
        xref: 'paper',
        yref: 'paper',
        text: '抖音2018vs2017人群增长倍数',
        showarrow: false,
        font: { size: 16, weight: 'bold' },
        bgcolor: 'rgba(255,255,255,0.9)',
        bordercolor: 'rgba(0,0,0,0.3)',
        borderwidth: 2,
        borderpad: 4,
        xanchor: 'left',
        yanchor: 'top'
    }];
    
    // 平均线
    traces.push({
        x: currentData.douyin.cities,
        y: Array(currentData.douyin.cities.length).fill(75),
        type: 'scatter',
        mode: 'lines',
        line: { dash: 'dash', color: 'gray', width: 1 },
        name: '平均线(75)',
        xaxis: 'x1',
        yaxis: 'y1'
    });
    
    // 饼图数据
    if (yearSelect === 'both' || yearSelect === '2017') {
        traces.push({
            labels: currentData.douyin.cities,
            values: currentData.douyin.distribution2017,
            type: 'pie',
            name: '2017年分布',
            marker: { colors: ['#2F4F4F', '#FF0000', '#A9A9A9', '#FFD700', '#B0C4DE'] },
            domain: { x: [0.05, 0.45], y: [0.05, 0.45] },
            textposition: 'outside',
            textinfo: 'label+percent',
            insidetextorientation: 'radial',
            hovertemplate: '<b>%{label}</b><br>2017年: %{value}%<extra></extra>'
        });
        
        layout.annotations.push({
            x: 0.25,
            y: 0.28,
            xref: 'paper',
            yref: 'paper',
            text: '2017年抖音用户地区分布',
            showarrow: false,
            font: { size: 14, weight: 'bold' },
            bgcolor: 'rgba(255,255,255,0.8)',
            bordercolor: 'rgba(0,0,0,0.2)',
            borderwidth: 1,
            borderpad: 3,
            xanchor: 'center',
            yanchor: 'bottom'
        });
    }
    
    if (yearSelect === 'both' || yearSelect === '2018') {
        traces.push({
            labels: currentData.douyin.cities,
            values: currentData.douyin.distribution2018,
            type: 'pie',
            name: '2018年分布',
            marker: { colors: ['#2F4F4F', '#FF0000', '#A9A9A9', '#FFD700', '#B0C4DE'] },
            domain: { x: [0.55, 0.95], y: [0.05, 0.45] },
            textposition: 'outside',
            textinfo: 'label+percent',
            insidetextorientation: 'radial',
            hovertemplate: '<b>%{label}</b><br>2018年: %{value}%<extra></extra>'
        });
        
        layout.annotations.push({
            x: 0.75,
            y: 0.28,
            xref: 'paper',
            yref: 'paper',
            text: '2018年抖音用户地区分布',
            showarrow: false,
            font: { size: 14, weight: 'bold' },
            bgcolor: 'rgba(255,255,255,0.8)',
            bordercolor: 'rgba(0,0,0,0.2)',
            borderwidth: 1,
            borderpad: 3,
            xanchor: 'center',
            yanchor: 'bottom'
        });
    }
    
    Plotly.newPlot('douyinChart', traces, layout);
}

// 4. 气温与降水量图表
function updateTemperatureChart() {
    const dataTypeElement = document.getElementById('dataType');
    if (!dataTypeElement || !document.getElementById('temperatureChart')) return;
    
    const dataType = dataTypeElement.value;
    
    const traces = [];
    
    if (dataType === 'all' || dataType === 'water') {
        // 水量数据 - 堆积柱状图
        traces.push({
            x: currentData.temperature.months,
            y: currentData.temperature.evaporation,
            type: 'bar',
            name: '蒸发量',
            marker: { color: 'orange' }
        });
        
        traces.push({
            x: currentData.temperature.months,
            y: currentData.temperature.precipitation,
            type: 'bar',
            name: '降水量',
            marker: { color: 'green' }
        });
    }
    
    if (dataType === 'all' || dataType === 'temperature') {
        // 气温数据 - 折线图 (第二Y轴)
        traces.push({
            x: currentData.temperature.months,
            y: currentData.temperature.temperature,
            type: 'scatter',
            mode: 'lines+markers',
            name: '平均气温',
            line: { color: 'magenta', dash: 'dash' },
            marker: { symbol: 'circle', size: 8 },
            yaxis: 'y2'
        });
    }
    
    const layout = {
        title: '平均气温与降水量、蒸发量的关系',
        xaxis: { title: '月份' },
        yaxis: { 
            title: '水量 (ml)',
            side: 'left'
        },
        yaxis2: {
            title: '气温(°C)',
            side: 'right',
            overlaying: 'y'
        },
        showlegend: true,
        height: 400
    };
    
    Plotly.newPlot('temperatureChart', traces, layout);
}

// 5. 子图布局示例
function updateSubplotLayouts() {
    const layoutTypeElement = document.getElementById('layoutType');
    if (!layoutTypeElement || !document.getElementById('subplotLayoutsChart')) return;
    
    const layoutType = layoutTypeElement.value;
    
    let traces = [];
    let layout = { height: 400, showlegend: false };
    
    switch(layoutType) {
        case 'basic':
            // 基本子图布局 (2x2)
            layout.grid = { rows: 2, columns: 2, pattern: 'independent' };
            
            currentData.subplotData.subplots.forEach((subplot, index) => {
                traces.push({
                    x: subplot.x,
                    y: subplot.y,
                    type: 'scatter',
                    xaxis: `x${index + 1}`,
                    yaxis: `y${index + 1}`
                });
            });
            
            layout.xaxis1 = { domain: [0, 0.45], anchor: 'y1', title: '子图1' };
            layout.yaxis1 = { domain: [0.55, 1], anchor: 'x1' };
            layout.xaxis2 = { domain: [0.55, 1], anchor: 'y2', title: '子图2' };
            layout.yaxis2 = { domain: [0.55, 1], anchor: 'x2' };
            layout.xaxis3 = { domain: [0, 0.45], anchor: 'y3', title: '子图3' };
            layout.yaxis3 = { domain: [0, 0.45], anchor: 'x3' };
            layout.xaxis4 = { domain: [0.55, 1], anchor: 'y4', title: '子图4' };
            layout.yaxis4 = { domain: [0, 0.45], anchor: 'x4' };
            
            layout.annotations = [
                { x: 0.225, y: 0.775, xref: 'paper', yref: 'paper', text: '子图1', showarrow: false },
                { x: 0.775, y: 0.775, xref: 'paper', yref: 'paper', text: '子图2', showarrow: false },
                { x: 0.225, y: 0.225, xref: 'paper', yref: 'paper', text: '子图3', showarrow: false },
                { x: 0.775, y: 0.225, xref: 'paper', yref: 'paper', text: '子图4', showarrow: false }
            ];
            break;
            
        case 'custom':
            // 自定义布局
            layout.grid = { rows: 3, columns: 2, pattern: 'independent' };
            
            [0, 1, 2].forEach(index => {
                traces.push({
                    x: currentData.subplotData.subplots[index].x,
                    y: currentData.subplotData.subplots[index].y,
                    type: 'scatter',
                    xaxis: `x${index + 1}`,
                    yaxis: `y${index + 1}`
                });
            });
            
            layout.xaxis1 = { domain: [0, 1], anchor: 'y1', title: '顶部子图(跨2列)', row: 1, col: 1 };
            layout.yaxis1 = { domain: [0.7, 1], anchor: 'x1' };
            layout.xaxis2 = { domain: [0, 0.45], anchor: 'y2', title: '左下子图', row: 2, col: 1 };
            layout.yaxis2 = { domain: [0.35, 0.65], anchor: 'x2' };
            layout.xaxis3 = { domain: [0.55, 1], anchor: 'y3', title: '右下子图', row: 2, col: 2 };
            layout.yaxis3 = { domain: [0.35, 0.65], anchor: 'x3' };
            
            layout.annotations = [
                { x: 0.5, y: 0.85, xref: 'paper', yref: 'paper', text: '跨列布局子图', showarrow: false },
                { x: 0.225, y: 0.5, xref: 'paper', yref: 'paper', text: '左子图', showarrow: false },
                { x: 0.775, y: 0.5, xref: 'paper', yref: 'paper', text: '右子图', showarrow: false }
            ];
            break;
            
        case 'shared':
            // 共享坐标轴布局
            layout.grid = { rows: 2, columns: 2, pattern: 'independent' };
            
            currentData.subplotData.subplots.forEach((subplot, index) => {
                traces.push({
                    x: subplot.x,
                    y: subplot.y,
                    type: 'scatter',
                    xaxis: `x${index + 1}`,
                    yaxis: `y${index + 1}`
                });
            });
            
            // 共享X轴
            layout.xaxis1 = { domain: [0, 0.45], anchor: 'y1', title: '共享X轴' };
            layout.yaxis1 = { domain: [0.55, 1], anchor: 'x1' };
            layout.xaxis2 = { domain: [0.55, 1], anchor: 'y2', title: '独立X轴' };
            layout.yaxis2 = { domain: [0.55, 1], anchor: 'x2' };
            layout.xaxis3 = { domain: [0, 0.45], anchor: 'y3', title: '共享X轴', matches: 'x1' };
            layout.yaxis3 = { domain: [0, 0.45], anchor: 'x3' };
            layout.xaxis4 = { domain: [0.55, 1], anchor: 'y4', title: '独立X轴' };
            layout.yaxis4 = { domain: [0, 0.45], anchor: 'x4' };
            
            layout.annotations = [
                { x: 0.225, y: 0.775, xref: 'paper', yref: 'paper', text: '子图1', showarrow: false },
                { x: 0.775, y: 0.775, xref: 'paper', yref: 'paper', text: '子图2', showarrow: false },
                { x: 0.225, y: 0.225, xref: 'paper', yref: 'paper', text: '子图3(共享X轴)', showarrow: false },
                { x: 0.775, y: 0.225, xref: 'paper', yref: 'paper', text: '子图4', showarrow: false }
            ];
            break;
    }
    
    Plotly.newPlot('subplotLayoutsChart', traces, layout);
}

// ===== 辅助函数 =====

// 显示消息（替代alert）
function showMessage(message) {
    console.log(message);
    // 可以添加更友好的消息显示方式，比如toast notification
}

// ===== 初始化函数 =====

// 初始化所有数据表格
function initAllDataTables() {
    initProductSalesTable();
    initPetOwnershipTable();
    initDouyinTable();
    initTemperatureTable();
    initSubplotTable();
}

// 更新导航功能，添加数据表格初始化
function showSection(sectionId, event) {
    // 隐藏所有部分
    document.querySelectorAll('.visualization-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // 移除所有按钮的active类
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 显示选中的部分
    document.getElementById(sectionId).classList.add('active');
    
    // 添加active类到对应的按钮
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    // 根据选中的部分更新图表和初始化数据表格
    switch(sectionId) {
        case 'product-sales':
            initProductSalesTable();
            updateProductSalesChart();
            break;
        case 'pet-ownership':
            initPetOwnershipTable();
            updatePetOwnershipChart();
            break;
        case 'douyin-analysis':
            initDouyinTable();
            updateDouyinChart();
            break;
        case 'temperature-precipitation':
            initTemperatureTable();
            updateTemperatureChart();
            break;
        case 'subplot-layouts':
            initSubplotTable();
            updateSubplotLayouts();
            break;
    }
}

// 检查Plotly是否加载完成
function waitForPlotly(callback) {
    if (typeof Plotly !== 'undefined') {
        callback();
    } else {
        setTimeout(() => waitForPlotly(callback), 100);
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    waitForPlotly(function() {
        initAllDataTables();
        updateProductSalesChart();
    });
});

// 页面完全加载后的备用初始化
window.addEventListener('load', function() {
    if (typeof Plotly !== 'undefined') {
        initAllDataTables();
        updateProductSalesChart();
    }
});