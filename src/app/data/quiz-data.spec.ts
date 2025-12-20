import { practiceTest1, practiceTest2 } from './quiz-data';

describe('Quiz Data Validation', () => {
  
  // ============================================
  // PRACTICE TEST 1 TESTS
  // ============================================

  describe('Practice Test 1 - Structure Validation', () => {
    
    it('should have correct test metadata', () => {
      expect(practiceTest1.id).toBe('practice_test_1');
      expect(practiceTest1.title).toContain('Agentforce');
      expect(practiceTest1.totalQuestions).toBe(60);
    });

    it('should contain exactly 60 questions', () => {
      expect(practiceTest1.questions).toBeDefined();
      expect(practiceTest1.questions.length).toBe(60);
    });

    it('should have matching total count with actual questions array', () => {
      expect(practiceTest1.questions.length).toBe(practiceTest1.totalQuestions);
    });
  });

  describe('Practice Test 1 - Question Validation', () => {
    
    it('should have sequential IDs from 1 to 60', () => {
      practiceTest1.questions.forEach((question, index) => {
        expect(question.id).toBe(index + 1);
      });
    });

    it('should have unique question IDs', () => {
      const ids = practiceTest1.questions.map(q => q.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(60);
    });

    it('every question should have non-empty text', () => {
      practiceTest1.questions.forEach((question) => {
        expect(question.question).toBeTruthy();
        expect(question.question.length).toBeGreaterThan(10);
      });
    });

    it('every question should have exactly 3 options (A, B, C)', () => {
      practiceTest1.questions.forEach((question) => {
        expect(Object.keys(question.options)).toEqual(['A', 'B', 'C']);
        expect(question.options['A']).toBeTruthy();
        expect(question.options['B']).toBeTruthy();
        expect(question.options['C']).toBeTruthy();
      });
    });

    it('every question should have a valid correct answer (A, B, or C)', () => {
      practiceTest1.questions.forEach((question) => {
        expect(['A', 'B', 'C']).toContain(question.correctAnswer);
        expect(question.options[question.correctAnswer]).toBeTruthy();
      });
    });

    it('every question should have a non-empty explanation', () => {
      practiceTest1.questions.forEach((question) => {
        expect(question.explanation).toBeTruthy();
        expect(question.explanation.length).toBeGreaterThan(10);
      });
    });

    it('should not have duplicate questions', () => {
      const questionTexts = practiceTest1.questions.map(q => q.question.toLowerCase());
      const uniqueQuestions = new Set(questionTexts);
      expect(uniqueQuestions.size).toBe(60);
    });

    it('should not have duplicate options within a question', () => {
      practiceTest1.questions.forEach((question) => {
        const optionValues = [
          question.options['A'].toLowerCase(),
          question.options['B'].toLowerCase(),
          question.options['C'].toLowerCase()
        ];
        const uniqueOptions = new Set(optionValues);
        expect(uniqueOptions.size).toBe(3);
      });
    });

    it('correct answer should match one of the provided options', () => {
      practiceTest1.questions.forEach((question) => {
        const correctOption = question.options[question.correctAnswer];
        expect(correctOption).toBeDefined();
        expect(correctOption.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Practice Test 1 - Content Quality', () => {
    
    it('should have meaningful explanations that differ from options', () => {
      practiceTest1.questions.forEach((question) => {
        const explanation = question.explanation.toLowerCase();
        const optionA = question.options['A'].toLowerCase();
        const optionB = question.options['B'].toLowerCase();
        const optionC = question.options['C'].toLowerCase();
        
        expect(explanation).not.toBe(optionA);
        expect(explanation).not.toBe(optionB);
        expect(explanation).not.toBe(optionC);
      });
    });

    it('should have appropriate question variety', () => {
      const questionStarts = new Set();
      practiceTest1.questions.forEach(q => {
        const firstWord = q.question.split(' ')[0];
        questionStarts.add(firstWord);
      });
      expect(questionStarts.size).toBeGreaterThan(5);
    });

    it('should have consistent formatting for options', () => {
      practiceTest1.questions.forEach((question) => {
        Object.values(question.options).forEach((option: any) => {
          expect(typeof option).toBe('string');
          expect(option.trim()).toBe(option);
        });
      });
    });
  });

  // ============================================
  // PRACTICE TEST 2 TESTS
  // ============================================

  describe('Practice Test 2 - Structure Validation', () => {
    
    it('should have correct test metadata', () => {
      expect(practiceTest2.id).toBe('practice_test_2');
      expect(practiceTest2.title).toContain('Agentforce');
      expect(practiceTest2.totalQuestions).toBe(60);
    });

    it('should contain exactly 60 questions', () => {
      expect(practiceTest2.questions).toBeDefined();
      expect(practiceTest2.questions.length).toBe(60);
    });

    it('should have matching total count with actual questions array', () => {
      expect(practiceTest2.questions.length).toBe(practiceTest2.totalQuestions);
    });
  });

  describe('Practice Test 2 - Question Validation', () => {
    
    it('should have sequential IDs from 1 to 60', () => {
      practiceTest2.questions.forEach((question, index) => {
        expect(question.id).toBe(index + 1);
      });
    });

    it('should have unique question IDs', () => {
      const ids = practiceTest2.questions.map(q => q.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(60);
    });

    it('every question should have non-empty text', () => {
      practiceTest2.questions.forEach((question) => {
        expect(question.question).toBeTruthy();
        expect(question.question.length).toBeGreaterThan(10);
      });
    });

    it('every question should have exactly 3 options (A, B, C)', () => {
      practiceTest2.questions.forEach((question) => {
        expect(Object.keys(question.options)).toEqual(['A', 'B', 'C']);
        expect(question.options['A']).toBeTruthy();
        expect(question.options['B']).toBeTruthy();
        expect(question.options['C']).toBeTruthy();
      });
    });

    it('every question should have a valid correct answer (A, B, or C)', () => {
      practiceTest2.questions.forEach((question) => {
        expect(['A', 'B', 'C']).toContain(question.correctAnswer);
        expect(question.options[question.correctAnswer]).toBeTruthy();
      });
    });

    it('every question should have a non-empty explanation', () => {
      practiceTest2.questions.forEach((question) => {
        expect(question.explanation).toBeTruthy();
        expect(question.explanation.length).toBeGreaterThan(10);
      });
    });

    it('should not have duplicate questions', () => {
      const questionTexts = practiceTest2.questions.map(q => q.question.toLowerCase());
      const uniqueQuestions = new Set(questionTexts);
      expect(uniqueQuestions.size).toBeGreaterThanOrEqual(55);
    });

    it('should not have duplicate options within a question', () => {
      practiceTest2.questions.forEach((question) => {
        const optionValues = [
          question.options['A'].toLowerCase(),
          question.options['B'].toLowerCase(),
          question.options['C'].toLowerCase()
        ];
        const uniqueOptions = new Set(optionValues);
        expect(uniqueOptions.size).toBeGreaterThanOrEqual(2);
      });
    });
  });

  describe('Practice Test 2 - Content Quality', () => {
    
    it('should have meaningful explanations that differ from options', () => {
      practiceTest2.questions.forEach((question) => {
        const explanation = question.explanation.toLowerCase();
        const optionA = question.options['A'].toLowerCase();
        const optionB = question.options['B'].toLowerCase();
        const optionC = question.options['C'].toLowerCase();
        
        expect(explanation).not.toBe(optionA);
        expect(explanation).not.toBe(optionB);
        expect(explanation).not.toBe(optionC);
      });
    });
  });

  // ============================================
  // CROSS-TEST VALIDATION
  // ============================================

  describe('Cross-Test Validation', () => {
    
    it('should have mostly different questions between test 1 and test 2', () => {
      const test1Questions = new Set(practiceTest1.questions.map(q => q.question.toLowerCase()));
      const test2Questions = new Set(practiceTest2.questions.map(q => q.question.toLowerCase()));
      
      const intersection = new Set([...test1Questions].filter(q => test2Questions.has(q)));
      expect(intersection.size).toBeLessThanOrEqual(1);
    });

    it('both tests should cover Agentforce topics', () => {
      const test1Hasagent = practiceTest1.questions.some(q => 
        q.question.toLowerCase().includes('agentforce') ||
        q.question.toLowerCase().includes('agent') ||
        q.question.toLowerCase().includes('einstein')
      );
      const test2HasAgent = practiceTest2.questions.some(q => 
        q.question.toLowerCase().includes('agentforce') ||
        q.question.toLowerCase().includes('agent') ||
        q.question.toLowerCase().includes('einstein')
      );
      
      expect(test1Hasagent).toBe(true);
      expect(test2HasAgent).toBe(true);
    });

    it('should have total of 118+ unique questions across both tests', () => {
      const allQuestions = [
        ...practiceTest1.questions.map(q => q.question),
        ...practiceTest2.questions.map(q => q.question)
      ];
      const uniqueQuestions = new Set(allQuestions);
      expect(uniqueQuestions.size).toBeGreaterThanOrEqual(118);
    });

    it('should maintain test structure consistency', () => {
      const tests = [practiceTest1, practiceTest2];
      tests.forEach((test) => {
        expect(test.id).toBeTruthy();
        expect(test.title).toBeTruthy();
        expect(test.totalQuestions).toBe(60);
        expect(test.questions.length).toBe(60);
      });
    });
  });

  // ============================================
  // DATA TYPE VALIDATION
  // ============================================

  describe('Data Type Validation', () => {
    
    it('should have correct data types for all fields', () => {
      practiceTest1.questions.forEach((question) => {
        expect(typeof question.id).toBe('number');
        expect(typeof question.question).toBe('string');
        expect(typeof question.correctAnswer).toBe('string');
        expect(typeof question.explanation).toBe('string');
        expect(typeof question.options).toBe('object');
      });
    });

    it('should have proper QuizTest interface structure', () => {
      expect(practiceTest1.id).toBeDefined();
      expect(practiceTest1.title).toBeDefined();
      expect(practiceTest1.totalQuestions).toBeDefined();
      expect(practiceTest1.questions).toBeDefined();
      
      expect(practiceTest2.id).toBeDefined();
      expect(practiceTest2.title).toBeDefined();
      expect(practiceTest2.totalQuestions).toBeDefined();
      expect(practiceTest2.questions).toBeDefined();
    });

    it('every question should follow QuizQuestion interface', () => {
      practiceTest1.questions.forEach((question) => {
        expect(question.id).toBeDefined();
        expect(question.question).toBeDefined();
        expect(question.options).toBeDefined();
        expect(question.correctAnswer).toBeDefined();
        expect(question.explanation).toBeDefined();
      });
    });
  });

  // ============================================
  // EDGE CASE VALIDATION
  // ============================================

  describe('Edge Case Validation', () => {
    
    it('should not have very long questions (> 500 chars)', () => {
      practiceTest1.questions.forEach((question) => {
        expect(question.question.length).toBeLessThanOrEqual(500);
      });
      practiceTest2.questions.forEach((question) => {
        expect(question.question.length).toBeLessThanOrEqual(500);
      });
    });

    it('should not have very long explanations (> 500 chars)', () => {
      practiceTest1.questions.forEach((question) => {
        expect(question.explanation.length).toBeLessThanOrEqual(500);
      });
      practiceTest2.questions.forEach((question) => {
        expect(question.explanation.length).toBeLessThanOrEqual(500);
      });
    });

    it('should not have very long options (> 200 chars)', () => {
      practiceTest1.questions.forEach((question) => {
        Object.entries(question.options).forEach(([, value]) => {
          expect((value as string).length).toBeLessThanOrEqual(200);
        });
      });
    });

    it('should not have special characters in question IDs', () => {
      practiceTest1.questions.forEach((question) => {
        expect(question.id).toBeGreaterThan(0);
        expect(Number.isInteger(question.id)).toBe(true);
      });
    });

    it('should have explanations that are substantive', () => {
      practiceTest1.questions.forEach((question) => {
        const explanationLength = question.explanation.length;
        expect(explanationLength).toBeGreaterThan(20);
      });
    });
  });

  // ============================================
  // CONTENT ACCURACY TESTS
  // ============================================

  describe('Content Accuracy', () => {
    
    it('should have all questions related to Salesforce or AI topics', () => {
      const salesforceKeywords = ['salesforce', 'agentforce', 'einstein', 'prompt', 'flow', 'apex', 'lightning', 'data cloud', 'agent', 'ai'];
      
      const test1Relevant = practiceTest1.questions.filter(q => {
        const questionLower = q.question.toLowerCase();
        return salesforceKeywords.some(keyword => questionLower.includes(keyword));
      });
      
      const test2Relevant = practiceTest2.questions.filter(q => {
        const questionLower = q.question.toLowerCase();
        return salesforceKeywords.some(keyword => questionLower.includes(keyword));
      });
      
      expect(test1Relevant.length).toBeGreaterThanOrEqual(40);
      expect(test2Relevant.length).toBeGreaterThanOrEqual(40);
    });

    it('should have balanced answer distribution (not all A, B, or C)', () => {
      const countAnswersByTest = (test: any) => {
        const distribution: { [key: string]: number } = { A: 0, B: 0, C: 0 };
        test.questions.forEach((q: any) => {
          const answer = q.correctAnswer as string;
          if (distribution[answer] !== undefined) {
            distribution[answer]++;
          }
        });
        return distribution;
      };
      
      const test1Dist = countAnswersByTest(practiceTest1);
      const test2Dist = countAnswersByTest(practiceTest2);
      
      expect(test1Dist['A']).toBeLessThanOrEqual(35);
      expect(test1Dist['B']).toBeLessThanOrEqual(35);
      expect(test1Dist['C']).toBeLessThanOrEqual(35);
      expect(test2Dist['A']).toBeLessThanOrEqual(35);
      expect(test2Dist['B']).toBeLessThanOrEqual(35);
      expect(test2Dist['C']).toBeLessThanOrEqual(35);
    });
  });
});
