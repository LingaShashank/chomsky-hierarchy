import React, { useState } from 'react';
import { Button, Container, Paper, TextareaAutosize, Typography } from '@mui/material';

const GrammarAnalyzer = () => {
  const [inputGrammar, setInputGrammar] = useState('');
  const [grammarType, setGrammarType] = useState('');

  const analyzeGrammar = () => {
    const rules = inputGrammar.split('\n').filter(rule => rule.trim() !== '');

    if (isRegularGrammar(rules)) {
      setGrammarType('Type 3 (Regular Grammar)');
    } else if (isContextFreeGrammar(rules)) {
      setGrammarType('Type 2 (Context-Free Grammar)');
    } else if (isContextSensitiveGrammar(rules)) {
      setGrammarType('Type 1 (Context-Sensitive Grammar)');
    } else if (isUnrestrictedGrammar(rules)) {
      setGrammarType('Type 0 (Unrestricted Grammar)');
    } else {
      setGrammarType('Unknown');
    }
  };

  const isRegularGrammar = (rules) => {
    const regularRuleRegex = /^[A-Z]\s*->\s*(?:[a-z][A-Z]?|\s*ε\s*)$/;
    for (let rule of rules) {
      if (!regularRuleRegex.test(rule)) {
        return false;
      }
    }
    return true;
  };

  const isContextFreeGrammar = (rules) => {
    for (let rule of rules) {
      const lhs = rule.split('->').map(str => str.trim());
      if (lhs.length === 1 && lhs.toUpperCase() === lhs) {
        return true;
      }
    }
    return false;
  };

  const isContextSensitiveGrammar = (rules) => {
    for (let rule of rules) {
      const [lhs, rhs] = rule.split('->').map(str => str.trim());
      if (lhs.length <= rhs.length) {
        return true;
      }
    }
    return false;
  };

  const isUnrestrictedGrammar = (rules) => {
    return true;
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>Grammar Analyzer</Typography>
        <TextareaAutosize
          rows={10}
          cols={50}
          value={inputGrammar}
          onChange={(e) => setInputGrammar(e.target.value)}
          placeholder="Enter grammar rules... *"
          sx={{ width: '100%', mb: 2 }}
        />
        <Button variant="contained" onClick={analyzeGrammar} sx={{ mr: 2 }}>Analyze Grammar</Button>
        <Typography variant="subtitle1">Grammar Type: {grammarType}</Typography>
      </Paper>
    </Container>
  );
};

export default GrammarAnalyzer;
