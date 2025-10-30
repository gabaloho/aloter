"use client";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import NatureIcon from '@mui/icons-material/Nature';

export default function Services() {
    const services = [
        {
            id: 1,
            title: "Infrastructure Finance",
            description: "Comprehensive financing solutions for large-scale infrastructure projects including transportation, energy, telecommunications, and utilities across Africa.",
            icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
            features: ["Project Structuring", "Risk Assessment", "Capital Arrangement", "Regulatory Compliance"]
        },
        {
            id: 2,
            title: "Project Finance",
            description: "Specialized financing for complex projects with long-term revenue streams, ensuring optimal capital structure and risk distribution.",
            icon: <BusinessCenterIcon sx={{ fontSize: 40 }} />,
            features: ["Due Diligence", "Financial Modeling", "Syndication", "Documentation"]
        },
        {
            id: 3,
            title: "Real Estate Development",
            description: "End-to-end real estate development services from land acquisition to project completion, focusing on sustainable and community-oriented developments.",
            icon: <HomeWorkIcon sx={{ fontSize: 40 }} />,
            features: ["Site Selection", "Design & Planning", "Construction Management", "Sales & Marketing"]
        },
        {
            id: 4,
            title: "Asset Management",
            description: "Professional management of real estate and infrastructure assets to maximize returns while maintaining ESG compliance and operational excellence.",
            icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
            features: ["Portfolio Optimization", "Performance Monitoring", "Tenant Relations", "Maintenance Planning"]
        },
        {
            id: 5,
            title: "Leasing & Asset Finance",
            description: "Flexible leasing solutions and asset financing options for equipment, vehicles, and real estate to support business growth and expansion.",
            icon: <SecurityIcon sx={{ fontSize: 40 }} />,
            features: ["Equipment Leasing", "Property Leasing", "Sale & Leaseback", "Asset Valuation"]
        },
        {
            id: 6,
            title: "ESG Advisory",
            description: "Expert guidance on Environmental, Social, and Governance compliance to ensure sustainable and responsible investment practices.",
            icon: <NatureIcon sx={{ fontSize: 40 }} />,
            features: ["ESG Assessment", "Sustainability Planning", "Impact Measurement", "Compliance Monitoring"]
        }
    ];

    return (
        <Box sx={{ py: 8, backgroundColor: 'grey.50' }}>
            <Container maxWidth="lg">
                {/* Section Header */}
                <Box textAlign="center" mb={8}>
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ color: 'primary.main' }}
                    >
                        Our Services
                    </Typography>
                    <Typography
                        variant="h5"
                        color="text.secondary"
                        sx={{ maxWidth: 'md', mx: 'auto', lineHeight: 1.6 }}
                    >
                        Comprehensive ESG-compliant financial solutions for infrastructure development
                        and sustainable growth across Africa
                    </Typography>
                </Box>

                {/* Services Grid */}
                <Grid container spacing={4}>
                    {services.map((service) => (
                        <Grid item xs={12} md={6} lg={4} key={service.id}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    borderRadius: 3,
                                    transition: 'all 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                                    },
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                {/* Service Icon */}
                                <Box
                                    sx={{
                                        backgroundColor: 'primary.main',
                                        color: 'white',
                                        borderRadius: '50%',
                                        width: 80,
                                        height: 80,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mb: 3,
                                        mx: 'auto',
                                    }}
                                >
                                    {service.icon}
                                </Box>

                                {/* Service Title */}
                                <Typography
                                    variant="h5"
                                    fontWeight="bold"
                                    gutterBottom
                                    textAlign="center"
                                    sx={{ color: 'primary.main', mb: 2 }}
                                >
                                    {service.title}
                                </Typography>

                                {/* Service Description */}
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    sx={{ mb: 3, lineHeight: 1.6, textAlign: 'center', flex: 1 }}
                                >
                                    {service.description}
                                </Typography>

                                {/* Service Features */}
                                <Box>
                                    <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: 'text.primary', mb: 2 }}>
                                        Key Features:
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                        {service.features.map((feature, index) => (
                                            <Typography
                                                key={index}
                                                variant="body2"
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    color: 'text.secondary',
                                                    '&:before': {
                                                        content: '"✓"',
                                                        color: 'success.main',
                                                        fontWeight: 'bold',
                                                        mr: 1,
                                                    }
                                                }}
                                            >
                                                {feature}
                                            </Typography>
                                        ))}
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* Call to Action */}
                <Box textAlign="center" mt={8}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: 'primary.main' }}>
                        Ready to Partner with Us?
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 'md', mx: 'auto' }}>
                        Contact our team to discuss how our ESG-compliant solutions can drive your project's success
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Box
                            component="a"
                            href="#contact"
                            sx={{
                                backgroundColor: 'primary.main',
                                color: 'white',
                                px: 4,
                                py: 2,
                                borderRadius: 2,
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: 'primary.dark',
                                    transform: 'translateY(-2px)',
                                }
                            }}
                        >
                            Get Started Today
                        </Box>
                        <Box
                            component="a"
                            href="mailto:info@guerealtyltd.com"
                            sx={{
                                border: '2px solid',
                                borderColor: 'primary.main',
                                color: 'primary.main',
                                px: 4,
                                py: 2,
                                borderRadius: 2,
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    color: 'white',
                                    transform: 'translateY(-2px)',
                                }
                            }}
                        >
                            Email Us
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
