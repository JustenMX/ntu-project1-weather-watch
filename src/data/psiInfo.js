const psiInfo = [
    {
        psiLowerBound: 0,
        psiUpperBound: 50,
        descriptor: "good",
        health_advisory: {
            healthy_persons: "normal activities",
            elderly_pregnant_children: "normal activities",
            lung_heart_disease: "normal activities", 
        },
    },
    {
        psiLowerBound: 51,
        psiUpperBound: 100,
        descriptor: "moderate",
        health_advisory: {
          healthy_persons: "normal activities",
          elderly_pregnant_children: "normal activities",
          lung_heart_disease: "normal activities", 
        },
    },
    {
        psiLowerBound: 101,
        psiUpperBound: 200,
        descriptor: "unhealthy",
        health_advisory: {
          healthy_persons: "Reduce prolonged or strenuous outdoor physical exertion",
          elderly_pregnant_children: "Minimise prolonged or strenuous outdoor physical exertion",
          lung_heart_disease: "Avoid prolonged or strenuous outdoor physical exertion", 
        },
    },
    {
        psiLowerBound: 201,
        psiUpperBound: 300,
        descriptor: "very unhealthy",
        health_advisory: {
          healthy_persons: "Avoid prolonged or strenuous outdoor physical exertion",
          elderly_pregnant_children: "Minimise outdoor activity",
          lung_heart_disease: "Avoid outdoor activity", 
        },
    },
    {
        psiLowerBound: 300,
        descriptor: "hazardous",
        health_advisory: {
          healthy_persons: "Minimise outdoor activity",
          elderly_pregnant_children: "Avoid outdoor activity",
          lung_heart_disease: "Avoid outdoor activity", 
        },
    },
];
    
    export default psiInfo;
    