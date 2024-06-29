import axios from 'axios'

export const api = axios.create({
    baseURL: "https://vqbtlusfaoxhwhmqklor.supabase.co/rest/v1",
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxYnRsdXNmYW94aHdobXFrbG9yIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTM2Mjc2NCwiZXhwIjoyMDM0OTM4NzY0fQ.sU7V23IjIcbpzXdrM1ndNByuy7fxDy1J3g3B0Qo-egA",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxYnRsdXNmYW94aHdobXFrbG9yIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTM2Mjc2NCwiZXhwIjoyMDM0OTM4NzY0fQ.sU7V23IjIcbpzXdrM1ndNByuy7fxDy1J3g3B0Qo-egA"
    }

})