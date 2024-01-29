//(Sección para solicitar créditos)
// components/CreditRequest.js
import React, { useState } from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';

const CreditRequest = ({ onCreditRequest }) => {
  const [creditAmount, setCreditAmount] = useState('');

  const handleCreditRequest = () => {
    // Aquí puedes realizar lógica adicional antes de enviar la solicitud
    onCreditRequest(creditAmount);
  };

  return (
    <div>
      <Typography variant="h5" mt={3} mb={2}>
        Solicitud de Crédito
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField
          label="Monto del Crédito"
          variant="outlined"
          type="number"
          value={creditAmount}
          onChange={(e) => setCreditAmount(e.target.value)}
          sx={{ marginBottom: '10px' }}
        />
        <Button variant="contained" color="primary" onClick={handleCreditRequest}>
          Solicitar Crédito
        </Button>
      </Box>
    </div>
  );
};

export default CreditRequest;
